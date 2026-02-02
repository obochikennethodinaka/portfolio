// alert("rated 19");


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