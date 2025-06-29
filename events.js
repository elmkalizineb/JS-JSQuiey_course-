
const clickMeB = document.getElementById("clickMe");
/** CLICK  */
clickMeB.addEventListener("click" , function () {
    alert("Button Clicked!");
});

/* KEYPRESS */ 
document.addEventListener("keypress" , function(event){
    console.log("key pressed ",event.key );
});

/** HOVER */
clickMeB.addEventListener("mouseout" , function(){
    console.log("mouse over Button ");
});