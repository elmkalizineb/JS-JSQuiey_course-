$(document).ready(function () {
  alert("jQuery fonctionne !");
});


// $(document).ready(function() {
//   // 1) First .sibling: add a 2px blue border + a little padding
//   $('.sibling:first-child').css({
//     'border': '2px solid #3498db',
//     'padding': '4px'
//   });

//   // 2) All .sibling: red background
//   $('.sibling').css('background-color', '#e74c3c');
  
//   // 3) Debug: log how many elements were matched
//   console.log('first-child count:', $('.sibling:first-child').length);
//   console.log('all siblings count:', $('.sibling').length);
// });

$(document).ready(
    function(){

    $('.sibling:first').css('border-color','#860707');
    $('.sibling').css('background-color','#e74c3c');
});