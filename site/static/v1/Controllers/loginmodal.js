function validatelogn() {
    var errorschecks = "success";
   
    var l_email = document.getElementById("l_email").value;
  
    var l_password = document.getElementById("l_password").value;

    var le_email = document.getElementById("le_email");
    var le_password = document.getElementById("le_password");
    le_email.innerHTML = "";
    le_password.innerHTML = "";
  

    if (l_email == "") {
        le_email.innerHTML = "Email required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success") { errorschecks = "success"; }

    }
    if (l_password == "") {
        le_password.innerHTML = "Password required";
        errorschecks = "error";
    } else {
        if (errorschecks == "success")
            errorschecks = "success";
    }


    
    if (errorschecks == "success") {
        loginaccount(null,null,l_email, l_password,"Email")
    }
}




function loginaccount(id,fname,email, pass, mode) {
    $('#ec-overlay').show()
  
    $.ajax({
        url: apicon + "/api/ECom/getlogin?SSO="+id+"&fullname="+fname+"&email="+email+"&password="+pass+"&mode="+mode,
        method: "get",
        headers: {
            'SubDomain': subdomain,
            'AccessKey': AccessKey,
        },
        success: function (response) {
            console.log(response)
            if (!response.includes('Invalid')) {
                // $('.noneDashboard').removeClass('d-none')
                localStorage.removeItem('gotrue.user');
                var Response = JSON.parse(response)
                const newItem = {
                    'id': Response[0].Uid,
                    'email': Response[0].Email,
                    'fullname': Response[0].Name,
                };
                localStorage.setItem('gotrue.user', JSON.stringify(newItem));
                
                if(sessionStorage.checkout !=null){
                    window.location.href = window.location.origin + "/checkout";
                  }else{
                    window.location.href = window.location.origin;
                  }
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

                toast.error(JSON.parse("Could not sign you in! Please try again...");
                // document.getElementById("le_invaild_account").innerHTML = JSON.parse(response)[0].Error;
            }
            $('#ec-overlay').hide()
        },

    });

}
