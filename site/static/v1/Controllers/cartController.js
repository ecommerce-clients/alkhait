try {
    


if(pagenames == "Cartpage")
{
    var deliveryprice =0;
function cardpage()
{
    try {
       
        
        items = localStorage.getItem("itemsArray");
        json = JSON.parse(items);
        const result = json.filter(ss => ss.user_id === ueres_id);
        var count = 0;
        toprice = 0;
        var student = '';
        if(result.length){
            $("#tbodyload div").remove();
        }
      
        for (i = 0; i < result.length; i++) {
            // console.log(json[i]);
            count++;
            student +=`
            <div class="col-lg-4 col-md-4 col-12 pm-10">
            <div class="row">
                <div class="col-4 pull-right"><img
                        src="${result[i].img}"
                        class="img-fluid" alt=""></div>
                <div class="col-8 pgt-25-mobile">
                <a href="${window.location.origin+'/products/'+result[i].old_id}" class="f-000 td-none"> <h6 class="mouse-pointer">${result[i].name}</h6>
                <span>`;
                if(result[i].size !='')
                student += "Size: "+result[i].size
                student +=` </span><br><br>
                </a>
                    
                    
                    <i class="fa fa-trash-o fs-25 mouse-pointer"
                        aria-hidden="true" onclick="add_delete('${result[i].id}',this)"></i>
                    <div class="row col-mobile-show">
                        <div class="col-12">
                            <p class="pgt-25">&nbsp;&nbsp;<span
                                    class="f-ff4e00 fs-16">Rs.${new Intl.NumberFormat().format(parseFloat(result[i].price))}</span></p>
                        </div>
                        <div class="col-12">
                            <input type="number"
                                class="form-control"
                                style="height: 50px; width: 30%;" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'${result[i].id}',${i},${result[i].price},'cart')" onchange="cartpricechnage(this,'${result[i].id}',${i},${result[i].price},'cart')" value="${result[i].quantity}">
                        </div>
                      
                    </div>
                </div>

            </div>


        </div>
        <div class="col-2 col-mobile">
            <p class="pgt-25">&nbsp;&nbsp;<span
                    class="f-ff4e00 fs-16" style="padding-left: 15px;">Rs.${new Intl.NumberFormat().format(parseFloat(result[i].price))}</span></p>
        </div>
        <div class="col-3 d-flex justify-content-center col-mobile
            callfun-mobile"
            style="padding-left: 56px;">
            <input type="number" class="form-control
                mgt-20" style="height: 50px; width: 30%;" onkeypress="return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57" oninput="this.value = Math.abs(this.value)" min="1"  maxlength="3" onkeyup="' + "cartpricechnage(this,'${result[i].id}',${i},${result[i].price},'cart')" onchange="cartpricechnage(this,'${result[i].id}',${i},${result[i].price},'cart')" value="${result[i].quantity}">
        </div>
       
            `;
            


            var price = parseFloat(result[i].price * result[i].quantity)
            toprice = parseFloat(toprice + price);

            $("#tbodyload div").remove();
            $('#tbodyload').append(student);

        };
        $('#p_subamount').text(new Intl.NumberFormat().format(parseFloat(toprice)));
        $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)))
       // $(".p_count").text(count);
       getcities()

    } catch (error) {
        var count = 0;
        toprice = 0;
     
        $('#p_subamount').text(toprice);
        $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)))
        getcities()
        //$(".p_count").text(count);

    }
}

function getcities(){
    $.ajax({
        "url": apicon+"/api/Ecom/GetManageDelivery",
        "method": "GET",
        "headers": {
            "SubDomain": subdomain,
            "AccessKey": AccessKey
        },
        success: function (response) {
            var datas = JSON.parse(response);
            console.log(datas)
            var len = 0;
            if (datas != null) {
                len = datas.length;
            }
            else {

            }
                // alert(response)
            
            if (len > 0) {

                for (var i = 0; i < len; i++) {

                    fottor = '<option value="' + datas[i].CityID + '" data-miniorder="' + datas[i].MinimumOrderAmount + '" data-price="' + datas[i].Charges + '">' + datas[i].Name + '</option>';

                    $('#getcitys').append(fottor);
                }
               
            }

        }
    });
}
function onchacity() {
    deliveryprice = parseFloat($('#getcitys :selected').data("price"));
    $('#d_amount').text(new Intl.NumberFormat().format(deliveryprice));

    $('#t_amount').text(new Intl.NumberFormat().format(parseFloat(toprice)+deliveryprice))
}
}

} catch (error) {
    console.log(error)
}