<HTML lang="tr">
<head>
    <meta name="description" content="WEB PROJESİ">
    <meta name="author" content="Kevser">
    <meta name="keywords" content="WEB PROJE">
    <meta name="viewport" content="width=device-width", initial-scale=1.0>
    <title>Web Teknolojileri Projesi</title>
   
  </head>
<body>
<table>
<tr>
    <td>ADI</td><td>:</td> 
    <td><b> <?php echo $_POST['ad'];?> <b></td>
</tr>
<tr>
    <td>SOYADI</td><td>:</td> 
    <td><b> <?php echo $_POST['soyad'];?> <b></td>
</tr>
<tr>
    <td>YAŞI</td><td>:</td> 
    <td><b> <?php echo $_POST['yas'];?> <b></td>
</tr>
<tr>
    <td>CİNSİYETİ</td><td>:</td> 
    <td><b> <?php echo $_POST['cinsiyet'];?> <b></td>
</tr>
<tr>
    <td>EMAİLİ</td><td>:</td> 
    <td><b> <?php echo $_POST['email'];?> <b></td>
</tr>
<tr>
    <td>MESAJIN KONUSU</td><td>:</td> 
    <td><b> <?php echo $_POST['mesajkonu'];?> <b></td>
</tr>
<tr>
    <td>MESAJ</td><td>:</td> 
    <td><b> <?php echo $_POST['mesaj'];?> <b></td>
</tr>

<?php echo "<p> <a href='iletisim.html'>İletişim sayfasına geri dönmek için tıklayınız</a></p> ";?>

</table>
</body>
</HTML>