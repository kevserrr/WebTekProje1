<HTML lang="tr">
<head>
    <meta name="description" content="WEB PROJESİ">
    <meta name="author" content="Kevser">
    <meta name="keywords" content="WEB PROJE">
    <meta name="viewport" content="width=device-width", initial-scale=1.0>
    <title>Web Teknolojileri Projesi</title>
  </head>
<body>
<?php
    ob_start();
    $kullaniciMail = $_POST['loginMail'];
    $parola = $_POST['loginParola'];
    $kullanici= "b151210075";
    function Yonlendir($url,$zaman = 0){
        if($zaman != 0){
        echo "GİRİŞ BAŞARISIZ,geri yönlendiriliyorsunuz";
        header("Refresh: $zaman; url=$url");
        }
        else header("Location: $url");
        }
    if (isset($parola,$kullanici)) {
            if($kullaniciMail=="b151210075@sakarya.edu.tr" && $parola=="123")
            {
            echo "Hoşgeldiniz ".$kullanici;
            echo "<p> <a href='giris.html'>Giriş sayfasına geri dönmek için tıklayınız</a></p> ";
            }
            else
            {
            Yonlendir("giris.html",2);
            }
}
?>
</body>
</HTML>