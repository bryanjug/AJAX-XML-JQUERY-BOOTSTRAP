$(document).ready(function() {
    var displayMessage = function () {
        var user = $("#userid").val();
        var pass = $("#password").val();
        var usernames = new Array("user1", "user2", "user3");
        var passwords = new Array("pass1", "pass2", "pass3");
        
        for (var i=0; i<=usernames.length; i++) {
            if (usernames[i] == user) {
                var userString = usernames[i];    
            }
        }
        
        for (var i=0; i<=passwords.length; i++) {
            if (passwords[i] == pass) {
                var passString = passwords[i];
            }
        }
        
        for (var i=0; i<=passwords.length; i++) {
            var arrayUser = usernames[i];
            var arrayPass = passwords[i];
            
            if (userString == user && passString == pass && userString[userString.length -1] == passString[passString.length -1]) {
                $('#error').html("<p>You have successfully logged onto your class!</p>");
            } else {
                $('#error').html("<p><span style='color:red'>Error: User Id is not valid, please click the link below to try again<br /><br /><a href='asgn1_jug.html'>Try Again</a></span></p>");
            }
        }
    }
    window.onload = function () {
        document.getElementById("logon").onclick = displayMessage;
    }
});