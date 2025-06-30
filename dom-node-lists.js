const listItems =  document.querySelectorAll("#myList");

console.log("List items node list : ", listItems);

listItems.forEach((item,index) => {
    console.log(` List items  ${ index +1 } : ${ item.textContent }`);
});

listItems.forEach(item  => {
    item.style.color = "green";
});

listItems.forEach((item,index) => {
    item.addEventListener("click", function () {
        alert(` List items ${ index+1 } is  clicked `);
        console.log(` List items  ${ index+1 } is  clicked `);
    });
});

 