$(document).ready(function(){
    for (var i = 1; i <= 151; i++) {
        $('.left-side').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" id="${i}">`);
    };
    $(document).on('click', 'img', function(){
        var id = this.id;
        $.get("http://pokeapi.co/api/v2/pokemon/" + id + "/", function(value){
            var content = "";
            content += `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png" id="${id}">`;
            content += "<h4>Name: " + value['name'] + "</h4>";
            content += " <h4>Height:</h4>";
            content += value['Height'];
            content += "<h4>Weight</h4> ";
            content += value['weight'];
            content += "<h4>Types</h4>";
            content += "<ul>";
            for(var j = 0; j < value['types'].length; j++){
                content += "<li>" + value['types'][j]['name'] + "</li>"
            }
            content += "</ul>";
            $('right-side').html(content);
        })
    })
});
