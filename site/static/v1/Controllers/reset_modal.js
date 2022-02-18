var url_rest = window.location.href; //window.location.href
var urlrest = new URL(url_rest);
var restemail = urlrest.searchParams.get("email");
var restid = urlrest.searchParams.get("id");


function restmodalapi(){
    if(restemail !=null && restid !=null){
        showul('rest-email-modal');$('#mobile-search-modal').modal('show');
    }
    else{
        return 'false';
    }
}

if(restemail !=null && restid !=null){
var reset_email = document.getElementById("reset_email");
reset_email.value = restemail
function restvalidate() {
    var errorschecks = "success";
    


    document.getElementById("resete_email").innerHTML = "";
   

    if (reset_email == "") {
        document.getElementById("resete_email").innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }
    var reset_password = document.getElementById("reset_password").value;


    document.getElementById("resete_password").innerHTML = "";
   

    if (reset_password == "") {
        document.getElementById("resete_password").innerHTML = "Password required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }


    if (errorschecks == "success") {
        reset(reset_password)
    }
   
}


function reset(password){
    $('#ec-overlay').show()
    $.ajax({
        url: apicon + "/api/ECom/changepassword?id="+id+"&password="+password,
        method: "get",
        headers: {
            'SubDomain': subdomain,
            'AccessKey': AccessKey,
        },
        success: function (response) {
            console.log(response)
            if (!response.includes('exists')) {
                var options = {
                    autoClose: true,
                    progressBar: true,
                    enableSounds: true,
                    sounds: {

                        success: "https://res.cloudinary.com/dxfq3iotg/video/upload/v1557233524/success.mp3",

                    },
                };
                var toast = new Toasty(options);
                toast.configure(options);

                toast.success(response);

                loginaccount(null,null,document.getElementById("l_email").value, password,"Email")
            }
            else {
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

                toast.error(response);
            }
            $('#ec-overlay').hide()
        },

    });
}

}