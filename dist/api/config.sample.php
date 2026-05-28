<?php
/**
 * Copy to config.php on the server (same folder as contact.php).
 * Ensure api/data/ is writable by PHP.
 */
return [
    'mail_to' => 'contato@nautk.org',
    'mail_from' => 'noreply@nautk.org',
    'data_dir' => __DIR__ . '/data',
    'allowed_origins' => [
        'https://www.nautk.org',
        'https://nautk.org',
        'http://localhost:5173',
    ],
];
