<?php

function nautk_config(): array
{
    static $config = null;
    if ($config === null) {
        $path = __DIR__ . '/config.php';
        if (!file_exists($path)) {
            http_response_code(500);
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Missing server/php/config.php']);
            exit;
        }
        $config = require $path;
    }
    return $config;
}

function nautk_cors(): void
{
    $config = nautk_config();
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = $config['allowed_origins'] ?? [];
    if ($origin && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function nautk_json_input(): array
{
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '[]', true);
    return is_array($data) ? $data : [];
}

function nautk_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function nautk_append(string $file, array $record): array
{
    $config = nautk_config();
    $dir = $config['data_dir'];
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    $path = $dir . '/' . $file;
    $list = file_exists($path) ? json_decode(file_get_contents($path), true) : [];
    if (!is_array($list)) {
        $list = [];
    }
    $entry = array_merge([
        'id' => bin2hex(random_bytes(8)),
        'created_at' => gmdate('c'),
    ], $record);
    $list[] = $entry;
    file_put_contents($path, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    return $entry;
}

function nautk_send_mail(string $subject, string $html): void
{
    $config = nautk_config();
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $config['mail_from'],
    ];
    @mail($config['mail_to'], $subject, $html, implode("\r\n", $headers));
}

function nautk_course_labels(): array
{
    return [
        'arrais' => 'Arrais Amador',
        'mestre' => 'Mestre Amador',
        'capitao' => 'Capitão Amador',
        'pratica' => 'Prática',
        'internacional' => 'Internacional',
        'general' => 'Geral',
    ];
}
