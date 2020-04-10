function myFunction(imgs){
    //Obter a imagem expandida
    var expandImg = document.getElementById("expandedImg");
    //Obter i texto da imagem
    var imgText = document.getElementById("imgtext");
    //use o mesmo src na imagem expandida que a imagem que está sendo clicada na grade
    expandImg.src = imgs.src;
    //use o valor do atributo alt da iamgem clicável como texto dentro da imagem expandida
    imgText.innerHTML = imgs.alt;
    //mostrar o elemento do cantainer (oculto com CSS)
    expandImg.parentElement.style.display = "block";
}