<?php
require_once dirname(__DIR__) . '/lib.php';

header('Content-Type: application/json; charset=UTF-8');
nautk_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = nautk_json_input();
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Nome, e-mail e mensagem são obrigatórios.']);
    exit;
}

$labels = nautk_course_labels();
$interest = $data['course_interest'] ?? 'general';
$phone = trim($data['phone'] ?? '');

$record = nautk_append('contact-messages.json', [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'course_interest' => $interest,
    'message' => $message,
]);

$subject = '[NAUTK] Nova mensagem de contato – ' . $name;
$html = '<h2>Nova mensagem de contato</h2>'
    . '<p><strong>Nome:</strong> ' . nautk_escape($name) . '</p>'
    . '<p><strong>E-mail:</strong> ' . nautk_escape($email) . '</p>'
    . '<p><strong>Telefone:</strong> ' . nautk_escape($phone !== '' ? $phone : 'Não informado') . '</p>'
    . '<p><strong>Interesse:</strong> ' . nautk_escape($labels[$interest] ?? $interest) . '</p>'
    . '<p><strong>Mensagem:</strong></p><pre>' . nautk_escape($message) . '</pre>';

nautk_send_mail($subject, $html);

http_response_code(201);
echo json_encode(['ok' => true, 'id' => $record['id']]);
