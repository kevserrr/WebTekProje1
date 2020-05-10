/** SLİDER ALANI */
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}
function next(direction){
  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}

setInterval(next , 2000);

/* GİRİŞ ALANI **/
function loginForm(){
    var kullMail=document.getElementById("kullanici-email").value;
    var parola=document.getElementById("parola").value;
    var regexMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    /**  MAİL KONTROLÜ  */
    if(kullMail == ""){
        document.getElementById("kullaniciError").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    }else {
        document.getElementById("kullaniciError").innerHTML="";
    }
    if(regexMail.test(kullMail) == false ){
        document.getElementById("kullaniciError").innerHTML="Email hatalıdır";
        return false; 
    }else {
        document.getElementById("kullaniciError").innerHTML="";
    }

    /** PAROLA KONTROLÜ */
    if(parola == ""){
        document.getElementById("parolaError").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    }else {
        document.getElementById("parolaError").innerHTML="";
    }
    if((parola.length < 2) || (parola.length > 6)){
        document.getElementById("parolaError").innerHTML="Parolanız 2 ila 6 karakter arasında olmalıdır";
        return false; 
    } else {
        document.getElementById("parolaError").innerHTML="";
    }     
}


/* İLETİŞİM ALANI **/
function validateForm() {
    var adi = document.getElementById("ad").value;
    var soyadi = document.getElementById("soyad").value;
    var yasi=document.getElementById("yas").value;
    var kadin=document.getElementById("kadin").checked;
    var erkek=document.getElementById("erkek").checked;
    var email=document.getElementById("mail").value;
    var regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var konu=document.getElementById("msjsecim").value;
    var mesaj=document.getElementById("mesaj").value;
    var onay=document.getElementById("onay").checked;

    /** AD KONRTROLÜ */
    if (adi == "") {
        document.getElementById("errorAd").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    } else {
        document.getElementById("errorAd").innerHTML="";
    }
    if((adi.length < 2) || (adi.length > 25)){
        document.getElementById("errorAd").innerHTML="Adınız 2 ila 25 karakter arasında olmalıdır";
        return false; 
    } else {
        document.getElementById("errorAd").innerHTML="";
    }     
    /** SOYAD KONTROLÜ */
    if (soyadi == "") {
        document.getElementById("errorSoyad").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    } else{
        document.getElementById("errorSoyad").innerHTML="";
    }
    if((soyadi.length < 2) || (soyadi.length > 25)){
        document.getElementById("errorSoyad").innerHTML="Adınız 2 ila 25 karakter arasında olmalıdır";
        return false; 
    }  else {
        document.getElementById("errorSoyad").innerHTML="";
    }   
    /** YAS KONTROLÜ */
    if (yasi == "" || yasi==0) {
        document.getElementById("errorYas").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    } else{
        document.getElementById("errorYas").innerHTML="";
    }
    if(isNaN(yasi)){
        document.getElementById("errorYas").innerHTML="Sadece sayı girilmelidir";
        return false; 
    }else{
        document.getElementById("errorYas").innerHTML="";
    }
    if(yasi.length > 2){
        document.getElementById("errorYas").innerHTML="Yaşınızı doğru giriniz";
        return false; 
    }else {
        document.getElementById("errorYas").innerHTML="";
    }
    /** CİNSİYET KONTROLÜ **/ 
    if((kadin == "") && (erkek == "")){
        document.getElementById("errorCinsiyet").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    }else {
        document.getElementById("errorCinsiyet").innerHTML="";
    }
    /** MAİL KONTROLÜ */
    if(email == ""){
        document.getElementById("errorEmail").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    }else {
        document.getElementById("errorEmail").innerHTML="";
    }
    if(regMail.test(email) == false ){
        document.getElementById("errorEmail").innerHTML="Email hatalıdır";
        return false; 
    }else {
        document.getElementById("errorEmail").innerHTML="";
    }
    /**SELECT KONTROLÜ */
    if( konu == "Seciniz"){
        document.getElementById("errorSelect").innerHTML="Bu alan boş bırakılamaz";
        return false;
    }else {
        document.getElementById("errorSelect").innerHTML="";
    }
    /**TEXTAREA KONTROLÜ */
    if(mesaj == ""){
        document.getElementById("errorMesaj").innerHTML="Bu alan boş bırakılamaz";
        return false; 
    }else {
        document.getElementById("errorMesaj").innerHTML="";
    }
    if((mesaj.length < 6) || (adi.length > 150)){
        document.getElementById("errorMesaj").innerHTML="Mesajınız 6 ila 150 karakter aralığında olmalı";
        return false; 
    } else {
        document.getElementById("errorMesaj").innerHTML="";
    }
    /**CHECK KONTROLÜ */     
    if(onay == ""){
        document.getElementById("errorOnay").innerHTML="Girilen bilgileri onaylamanız gerekmektedir";
        return false; 
    }else {
        document.getElementById("errorOnay").innerHTML="";
    }
    
}