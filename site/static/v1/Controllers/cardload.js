try {
    


function cardload()
{
    try {
        $("#product_Addid .mobile-side-col-10").remove();
        
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        const result = json.filter(ss => ss.user_id === ueres_id);
        var count = 0;
        toprice = 0;
        var student = '';
        if(result.length){
            $('#imgaddtocartremove').hide();
        }
        else{
            $('#imgaddtocartremove').show();
        }
        for (i = 0; i < result.length; i++) {
            // console.log(json[i]);
            count++;
            
            student += `
            <div class="col-5 mobile-side-col-10 mt_14">
        <img style="width: 100%;"
          src="${result[i].img}"
          class="img-fluid" alt="">
      </div>
      <div class="col-7 mobile-side-col-10 pm-15 mt_14">
       <a href="${window.location.origin+'/products/'+result[i].old_id}" class="td-none f-000"> 
       <h6>${result[i].name}</h6>
       
       <span>`;
       if(result[i].size !='')
       student += "Size: "+result[i].size
       student +=` </span>
       </a>
        <h6><span
            style="color: red;">Rs.${new Intl.NumberFormat().format(parseFloat(result[i].price))}</span></h6>
        <input type="number" name="" id="" class="form-control" style="width:
          50%;" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="cartpricechnage(this,'${result[i].id}',${i},${result[i].price})" onchange="cartpricechnage(this,'${result[i].id}',${i},${result[i].price})" value="${result[i].quantity}">
        <i class="fa fa-trash-o fs-20 pgt-10" aria-hidden="true" onclick="add_delete('${result[i].id}',this)"></i>
        <br>
      </div> 
           `;
          
           $("#product_Addid .mobile-side-col-10").remove();
            $('#product_Addid').append(student);
            var price = parseFloat(result[i].price * result[i].quantity)
            toprice = parseFloat(toprice + price);
        };
        $('.pricedonefotter').text(new Intl.NumberFormat().format(parseFloat(toprice)));
        $(".p_count").text(count);
        checkoutfun()
    } catch (error) {
        var count = 0;
        toprice = 0;
     
        $('.pricedonefotter').text(toprice);
        $(".p_count").text(count);
        checkoutfun()

    }
   
    if(cardpage === undefined) {
    }
    else{
        cardpage()
    }
    
}

} catch (error) {
    console.log(error)
}