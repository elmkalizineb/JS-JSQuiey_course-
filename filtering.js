$(document).ready(
    function(){
        const animals = $('.animal');

        const mammals = animals.filter('.mammal').css('background-color','#e74c3c');

        const plants = $('.plant');

        const tellPlants = plants.filter(function(){
            return $(this).height() > 50;
        }).css('background-color','#27ae60');
    }
);
