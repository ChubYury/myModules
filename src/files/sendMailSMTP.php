<?php
  /*
    This email handler working on PHPMailer
  */
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  require 'phpmailer/src/PHPMailer.php';
  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/SMTP.php';

  // Create new e-mail
  $mail = new PHPMailer(true);

  // SMTP Configuration
  $mail->isSMTP();
  $mail->Host = 'host.ua'; // Your SMTP server
  $mail->SMTPAuth = true;
  $mail->Username = '*****'; // Your Mailtrap username
  $mail->Password = '*****'; // Your Mailtrap password
  $mail->SMTPSecure = 'ssl';
  $mail->Port = ***;

  // Sending plain text email
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/phpmailer.lang-ru.php');
  $mail->isHTML(true); // Set email format to plain text
  $mail->Subject = 'My test post'; // Title email

  // Sender and recipient settings
  $mail->setFrom('*************************'); // From Name
  $mail->addAddress('**********************'); // Recipient Name

  // Creating body email
  $body = '<h1>Hoвое письмо!<h1>';
  
  $hand = "Права";
  if($_POST['hand'] == "left"){
      $hand = "Левая";
  }

  if(trim(!empty($_POST['name']))){
      $body.='<p><strong>Имя: </strong>'.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
      $body.='<p><strong>Письмо: </strong>'.$_POST['email'].'</p>';
  }
  if(trim(!empty($_POST['hand']))){
      $body.='<p><strong>Рука: </strong>'.$_POST['hand'].'</p>';
  }
  if(trim(!empty($_POST['age']))){
      $body.='<p><strong>Возраст: </strong>'.$_POST['age'].'</p>';
  }
  if(trim(!empty($_POST['message']))){
      $body.='<p><strong>Сообщение: </strong>'.$_POST['message'].'</p>';
  }
  
  // Attach file
  if(!empty($_FILES['image']['tmp_name'])){
    // Patch of loading file
    $filePath = __DIR__ . "/loadIMG/" . $_FILES['image']['name'];
    
    // Loading file
    if(copy($_FILES['image']['tmp_name'], $filePath)){
      $fileAttach = $filePath;
      $body.='<p><strong>Фото в приложении</strong>';
      $mail->addAttachment($fileAttach);
    }
  }

  // Add body in email
  $mail->Body = $body;

  // Send the email
  if (!$mail->send()) {
    $message = 'Message could not be. Mailer Error:' . $mail->ErrorInfo;
  } else {
    $message = 'Message has been sent';
  }

  $response = ['message' => $message];
  
  header('Content-type: application/json');
  echo json_encode($response);
?>
