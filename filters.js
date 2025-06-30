$(document).ready(function () {
  $('#filter-fruits').click(function () {
    // 🔹 Exemple 1 : surligner le premier fruit
    $('.list li:first').css('color', 'blue');

    // 🔹 Exemple 2 : rendre les fruits impairs rouges
    $('.list li:odd').css('color', 'red');

    // 🔹 Exemple 3 : changer le texte du fruit à l’index 2 (banana)
    $('.list li:eq(2)').text('🍌 Banana filtré !');

    // 🔹 Exemple 4 : mettre une bordure aux fruits qui contiennent "e"
    $('.list li:contains("e")').css('border', '1px dashed green');
  });
});


