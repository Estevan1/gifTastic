$(document).ready(function() {

    var superHeros = ["Iron Man", "Thor", "Hulk", "Spiderman", "Loki", "Starlord", "Captain Marvel", "Thanos", "Wolverine", "Doctor Strange", "Black Widow", "Scarlet Witch", "Jean Grey"];

    function renderButtons() {
        $('#buttons-view').empty();

        for (var i = 0; i < superHeros.length; i++) {
            
            var a = $('<button>');
            a.addClass('heros');
            a.attr('data-name', superHeros[i]);
            a.text(superHeros[i]);
            $('#buttons-view').append(a);
        }
    }
    renderButtons();

$(document).on('click', '.heros', function() {

        var marvel = $(this).html();
        //console.log(marvel);


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + marvel + "api_key=bPQypu0RD2yZCmoQ0Lo66bbPSLvcbX5G&q=marvel&limit=10&offset=0&rating=PG-13&lang=en";
        


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            var results = response.data;
            

            $('#movies-view').empty();
            for (var j = 0; j < results.length; j++) {
                var imageDiv = $('<div>');
                var imageView = resullts[j].images.url;
                var still = results[j].images.url;

            var gifImage = $('<img>').attr('src', still).attr('data-animate', imageView).attr('data-still', still);
                    gifImage.attr('data-state', 'still');
                    $('movies-view').prepend(gifImage);
                    gifImage.on('click', playGif);



            var rating= results[j].rating;
            var displayRated= $('<p>').text('Rating: ' + rating);
            $('#movies-view').prepend(displayRated);
         }

        });

            function playGif() {
                var state = $(this).attr('data-state');
                if (state == 'still'){
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('data-state', 'animate');
                }
                else {
                    $(this).attr('src', $(this).data('still'));
                    $(this).attr('data-state', 'still');
                }

            }

    });

            $(document).on('click', '#add-movie', function(){
                if ($('#movie-input').val().trim() ==''){
                    alert('Input can not be left blank');
                }
                else {
                    var movies = $('#movie-input').val().trim();
                    topics.push(movies);
                    $('#movie-input').val('');
                    renderButtons();
                    return false;
                }
                
                
            });
       
            });

            