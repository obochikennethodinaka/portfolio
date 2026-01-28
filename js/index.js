alert("Rated 18")
var opening = prompt("ARE YOU ABOVE 18");
var response;

if (opening == "yes" ){
    response = alert("You Are Welcome");
}else if (opening == "YES"){
    response = alert("You Are Welcome");
}else if (opening =="no"){
    window.location.href="http://www.google.com";
}else if (opening == "NO"){
     window.location.href="http://www.google.com";
}else{
    response = alert("Kindly Leave This ");
}


  
var glbInc, glbDec;
    
function decreaseSizeImage(image) // will get back to its normal default size
{
var id = image;
if(glbInc != null) {clearTimeout(glbInc); glbInc = null;};
if (document.getElementById(id).height > 100)
{
document.getElementById(id).height -= 30;
document.getElementById(id).width -= 40;
glbDec = setTimeout("decreaseSizeImage('"+id+"')", 32);
};
}

function increaseSizeImage(image) // will increase the size of the image//
{
var id = image;
if(glbDec != null) {clearTimeout(glbDec); glbDec = null;};
if (document.getElementById(id).height < 216)
{
document.getElementById(id).height += 30;
document.getElementById(id).width += 40;
glbInc = setTimeout("increaseSizeImage('"+id+"')", 32);
};
}


    // preloader javascript
 window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    const body = document.body;

    const delay = 2000;

    setTimeout(() => {
        preloader.classList.add("hidden")
        body.classList.remove("preloader-active");
        setTimeout(() => preloader, remove(), 500);
    }, delay);
 })