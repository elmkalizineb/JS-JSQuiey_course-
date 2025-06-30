$(document).ready(
    function () {
        $('#load-hero').on('click',function(){
            $.ajax({
                url:'https://jsonplaceholder.typicode.com/todos/1',
                method: 'GET',
                success:function(data){
                    $('#hero-info').html(`
                        <h2>${ data.title }</h2>
                        <p> ID : ${ data.id }</p>
                        <p> completed : ${ data.completed ? 'Yes' : 'NO' }</p>


                        
                        
                        `);
                },
                error : function(){
                    $('#hero-info').html(`<p> failed to load superhero . Please try again </p>`)
                }
            });
        });
});
