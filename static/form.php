<?php
  // Recibe los datos del formulario
  $nombre = $_POST['nombre'];
  $empresa = $_POST['empresa'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $ciudad = $_POST['ciudad'];
  $asunto = $_POST['asunto'];
  $mensaje = $_POST['mensaje'];
  // Configura los datos del correo electrónico
  $destinatario = 'mespinosa@marker.com.mx';
  $subject = 'Nuevo correo desde el sitio web de IOTAM';
  $cuerpo = "Nombre: $nombre\nEmpresa: $empresa\nEmail: $email\nTeléfono: $telefono\nCiudad: $ciudad\nAsunto: $asunto\nMensaje: $mensaje";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  // Envía el correo electrónico
  mail($destinatario, $subject, $cuerpo, $headers);
  // Redirige al usuario a una página de confirmación
  header('Location: confirmacion.html'); // confirmacion.html debe existir
?>