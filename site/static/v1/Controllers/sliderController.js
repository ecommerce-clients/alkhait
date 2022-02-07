try{

if(foternameallow == 'fotter')
{
function sliderheroactive() {
    // Slider allow start
    try {
        var imgas = '';
        $.ajax({
            url: '/javascript/slider.json',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                if(response.length == 0)
                {
                    
                    $("#sliders_items_imgs .carousel-item").remove();
                }
                else{
                    $("#sliders_items_imgs .carousel-item").remove();
                    
                }
                $.each(response, function (index, element) {

                    if (index == 0) {
                        
                        imgas += '<div class="carousel-item active">' +
                            '<img src="' + element.src + '" class="d-block" style="width:100%">' +
                            '</div>';
                        
                    }
                    else {
                        
                        imgas += '<div class="carousel-item">' +
                        '<img src="' + element.src + '" class="d-block" style="width:100%">' +
                        '</div>';
                    }

                });
                $('#sliders_items_imgs').html(imgas);
                                                                 /*----------------------------- Main Slider ---------------------- */

            }


        })
    } catch (error) {
        console.log(error)
    }
    // Slider allow end
}
}

} catch (error) {
    console.log(error)
}