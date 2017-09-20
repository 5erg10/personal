<?php

	require_once('PHPMailer/class.phpmailer.php');
	require_once('PHPMailer/PHPMailerAutoload.php');
    
	$nombre = $_POST['nombre'];
	$correo = $_POST['email'];
	$empresa = $_POST['empresa'];
	$consulta = $_POST['consulta'];
	
    $mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPDebug = 0;
    $mail->SetLanguage("es", "");
    $mail->CharSet = "UTF-8";
	$mail->Mailer="SMTP";
    
    $mail->SMTPAuth=true;
	$mail->SMTPSecure = "ssl";
 
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
 
    $mail->Username = 'santamaria.fajardo@gmail.com'; // usuario
	$mail->Password = 'hztgwdanqlliozms'; // contraseña
 
    $mail->AddAddress('santamaria.fajardo@gmail.com' ,'Sergio Santamaria WEB');
    $mail->AddReplyTo($correo ,$nombre);
    $mail->SetFrom($correo , $nombre);
    
    $mail->IsHTML(true);
    
    $mail->Subject = "correo de consulta";
    
    $mail->Body = "
                                    <html>
                                    <head>
                                        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
                                    </head>
                                    <body>
										<p><b>Nombre: </b> $nombre</p>
										<p><b>Empresa: </b> $empresa</p>
										<p><b>consulta: </b> $consulta</p>
										<p><b>correo: </b> $correo</p>
                                        <table>
                                        </table>
                                    </body>
                                    </html>
                                ";
    
    $mail->AltBody = "";
    
    if( !$mail->Send() )
    {
        echo( 'error' );
        exit();
    }
    else
    {
        echo( 'Correo enviado.' );
        exit();
    }

		
?>