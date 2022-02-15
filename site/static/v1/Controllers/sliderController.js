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
                    
                    $("#sliders_items_imgs img").remove();
                }
                else{
                    $("#sliders_items_imgs img").remove();
                    
                }
                $.each(response, function (index, element) {

                    if (index == 0) {
                        imgas += `
                        <img src="${ element.src }" class="img-fluid slider_images" style="width: 100%;" alt="">
                        `;
                       
                        
                    }
                    else {
                        
                        imgas += `
                        <img src="${ element.src }" class="img-fluid slider_images" style="width: 100%;" alt="">
                        `;
                    }

                });
   

                $('#sliders_items_imgs').html(imgas);
                 /*----------------------------- Main Slider ---------------------- */
                 $('.sliders_items_imgs').slick({
                    infinite: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                    });
                    $( ".slider_images" ).parent().parent().css('margin-left','unset');
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


