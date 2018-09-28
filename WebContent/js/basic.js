$(function () {
    //test if user have login
    testLogin();
    
    //
    $("#btn-logout").click(function(){
        //log out
        logout();
    });

});

function testLogin(username,password){
    var result;
    $.ajax({
        dataType:"json",
        type:"POST",
        url:"Login",
        data:{"username":username,
              "password":password},
        success:function (data) {
            result = data.result;
            var usernameLabel = $("#username");
            if(result === "success")
            {
                var username1 = data.username;
                usernameLabel.text(username1);
                usernameLabel.attr("href","#");
            }
            else
            {
                usernameLabel.text("Login");
                usernameLabel.attr("href","login.html");
            }
        }
    });
}

function logout(){
    $.ajax({
        dataType:"text",
        type:"get",
        url:"Logout",
        success:function (data) {
            console.log(data);
            alert("see you next time!");
            window.location.replace("login.html");
        }
    });
}

function jumpToAnotherPage(url)
{
    location.href = url;
}
