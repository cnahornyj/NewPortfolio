<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "clara.nahornyj@hotmail.com"; // Remplacez par l'adresse email de destination
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Nom: $name\n\nEmail: $email\n\nSujet: $subject\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email envoyé avec succès!";
    } else {
        echo "L'envoi de l'email a échoué.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>
