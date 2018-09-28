$(function () {
    //test if user have login
    testLoginCheckOut();

});

function testLoginCheckOut(username,password){
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
                alert("You should login first!");
                window.location.replace("login.html");
            }
        }
    });
}