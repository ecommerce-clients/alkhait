function changePrice(o,price,priceBefore)
   {
    var oldid= o.parentNode.getAttribute("data-productidsold");
       $('.price'+oldid).html(new Intl.NumberFormat().format(parseFloat(price)));
       if(priceBefore !='')       
       $('.beprice'+oldid).html(new Intl.NumberFormat().format(parseFloat(priceBefore)));
   
    }

   function tempFunction(btnAddToCart,title,Description,image,qty,poldid)
   {
        var mainProduct = document.querySelectorAll(".element-active-1 span");
        if($(mainProduct).find(".active").length == 0)
        {
         
                var options = {
                    autoClose: true,
                    progressBar: true,
                    enableSounds: true,
                    sounds: {
            
                        error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
            
                    },
                };
                var toast = new Toasty(options);
                toast.configure(options);
            
                toast.error("Please choose a size!");
            
            
                
           
        }
        else
                {
                   var p_id = $(mainProduct).find(".active")[0].getAttribute('data-ProductVariantID')
                   var retailprice = $(mainProduct).find(".active")[0].getAttribute('data-retailprice')
                   var size = $(mainProduct).find(".active")[0].getAttribute('data-Sizevariant')
                    Check(p_id,title,Description,retailprice,image,qty,poldid,size)
                    
                }
   }



   function s_changePrice(o,p_id,price,priceBefore,Size)
   {
       var oldid= o.parentNode.getAttribute("data-productidsold");
       $('.'+oldid).html(new Intl.NumberFormat().format(parseFloat(price)));
       
       if(priceBefore !='')       
       $('#'+oldid+oldid).html(new Intl.NumberFormat().format(parseFloat(priceBefore)));
   
       productids=p_id;
       setsizeprice=price;
       setsize = Size;
   }

   function checkpriceset(newid,title,Description,retailprice,image,qty,poldid,setsize)
   {
    if(newid == null)
    {
        var options = {
            autoClose: true,
            progressBar: true,
            enableSounds: true,
            sounds: {
    
                error: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",
    
            },
        };
        var toast = new Toasty(options);
        toast.configure(options);
    
        toast.error("Please choose a size!");
    
    }
    else
    {
        Check(newid,title,Description,retailprice,image,qty,poldid,setsize)
    }
   }

   var a = document.querySelectorAll(".element-active div .rectangle-span");
   for (var i = 0, length = a.length; i < length; i++) {
     a[i].onclick = function() {
       $(".rectangle-span").removeClass("active")
       this.classList.add('active');
     };
   }


   var a = document.querySelectorAll(".element-active-1 span span");
   for (var i = 0, length = a.length; i < length; i++) {
     a[i].onclick = function() {
       $(".element-active-1 span span").removeClass("active")
       this.classList.add('active');
     };
   }