<?php
//sending email with the php mail()
$success = mail('info@notamagic.com', 'Subject Line Here', 'Body of Message Here');


// Return an appropriate response to the browser
if ( isset($_GET["ajax"]) ) {
  echo $success ? "success" : "error";
} else {
?>
<html>
  <head>
    <title>Thanks!</title>
  </head>
  <body>
  <?php if ( $success ) echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>" ?>
  <?php if ( !$success ) echo "<p>There was a problem sending your message. Please try again.</p>" ?>
  <p>Click your browser's Back button to return to the page.</p>
  </body>
</html>
<?php
}
?>


