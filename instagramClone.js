//Images
var imgSelector = "[data-targetImage]";
var imgArray = document.querySelectorAll(imgSelector);


//Background
var imgHiddenBG = "[data-targetBG]";
var imgBackground = document.querySelector(imgHiddenBG);


//Exit
var imgExitSelector = "[data-targetExit]";
var imgExit = document.querySelector(imgExitSelector);


//Caption
var imgCaptionSelector = "[data-targetCaption]";
var imgCaption = document.querySelector(imgCaptionSelector);




//Enlarge Image Function
imgArray.forEach(function (img) {
    img.addEventListener("click", function (clickEvent) {
        clickEvent.preventDefault();

        //Caption Text Set
        var imgCaptionAttribute = img.getAttribute("alt");


        img.classList.add("imgZoomContent");

        imgBackground.classList.remove("imgBgHidden");

        imgExit.classList.remove("imgExitHidden");

        imgCaption.classList.remove("imgZoomTextHidden");

        imgCaption.textContent = imgCaptionAttribute;
    })   
});


//Exit Image Function
imgExit.addEventListener("click", function (exitEvent) {
    exitEvent.preventDefault();

    document.querySelector(".imgZoomContent").classList.remove("imgZoomContent");

    imgExit.classList.add("imgExitHidden");

    imgBackground.classList.add("imgBgHidden");

    imgCaption.classList.add("imgZoomTextHidden");
});
