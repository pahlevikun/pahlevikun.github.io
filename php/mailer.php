<?php
    header('Content-Type: application/json');
    
    $url = 'https://api.sendgrid.com/v3/mail/send';
    $email = $_POST['email'];
    $message = $_POST['message'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $headers = array (
        'Authorization: Bearer ' . "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",
        'Content-Type: application/json',
        "Access-Control-Allow-Origin: *",
        "Access-Control-Allow-Credentials: true",
        "Access-Control-Allow-Headers: Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods: POST, OPTIONS",
    );
    $json = '{"personalizations":[{"to":[{"email":"farhan.y.pahlevi@gmail.com"}],"subject":"'.$subject.'"}],"content": [{"type": "text/plain", "value": "'.$name.' - ('.$email.')\n'.$message.'"}],"from":{"email":"pahlevikun.id@gmail.com"}}';

    $ch = curl_init ();
    curl_setopt ( $ch, CURLOPT_URL, $url );
    curl_setopt ( $ch, CURLOPT_POST, true );
    curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
    curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt ( $ch, CURLOPT_POSTFIELDS, $json );

    curl_exec ($ch);
?>