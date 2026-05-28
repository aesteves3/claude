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
$courseId = trim($data['course_id'] ?? '');
$name = trim($data['student_name'] ?? '');
$email = trim($data['student_email'] ?? '');

if ($courseId === '' || $name === '' || $email === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Curso, nome e e-mail são obrigatórios.']);
    exit;
}

$coursesPath = dirname(__DIR__, 3) . '/public/data/courses.json';
$courseTitle = $courseId;
if (file_exists($coursesPath)) {
    $courses = json_decode(file_get_contents($coursesPath), true) ?: [];
    foreach ($courses as $course) {
        if (($course['id'] ?? '') === $courseId) {
            $courseTitle = $course['title'] ?? $courseId;
            break;
        }
    }
}

$record = nautk_append('enrollments.json', [
    'course_id' => $courseId,
    'course_title' => $courseTitle,
    'student_name' => $name,
    'student_email' => $email,
    'student_phone' => trim($data['student_phone'] ?? ''),
    'notes' => trim($data['notes'] ?? ''),
    'status' => 'pending',
]);

$subject = '[NAUTK] Nova matrícula – ' . $name;
$html = '<h2>Nova solicitação de matrícula</h2>'
    . '<p><strong>Curso:</strong> ' . nautk_escape($courseTitle) . '</p>'
    . '<p><strong>Nome:</strong> ' . nautk_escape($name) . '</p>'
    . '<p><strong>E-mail:</strong> ' . nautk_escape($email) . '</p>'
    . '<p><strong>Telefone:</strong> ' . nautk_escape(trim($data['student_phone'] ?? '') ?: 'Não informado') . '</p>'
    . '<p><strong>Observações:</strong></p><pre>' . nautk_escape(trim($data['notes'] ?? '') ?: '-') . '</pre>';

nautk_send_mail($subject, $html);

http_response_code(201);
echo json_encode(['ok' => true, 'id' => $record['id']]);
