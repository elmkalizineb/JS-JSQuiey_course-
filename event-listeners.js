
const clickMeButton=document.getElementById("clickMe");

clickMeButton.addEventListener("click" , function () {
    alert("button Clicked");
});


    const dynamicList = document.getElementsByClassName("LI-button");

    for (let index = 0; index < dynamicList.length; index++) {

        dynamicList[index].addEventListener("click", function(){
            alert("Clicked on " + this.textContent);
    });
    }
 

/* 
    document.querySelectorAll(".LI-button").forEach(function(button) {
    button.addEventListener("click", function() {
        alert("You clicked: " + this.textContent);
    });
    });
*/
