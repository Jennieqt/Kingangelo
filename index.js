function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username >= 99 && username <= 999 && password == "wonderful") {
        alert("Congratulations! You have successfully logged in.");
        return false;
    }
    else {
        alert("Login Failed!");
    }
}

function myFunction() {
    document.getElementById('hellaws').style.background = "url(halloween.gif) center fixed";
    document.getElementById('hellaws').style.backgroundSize = "cover";
}
function myFunction2() {
    document.getElementById('hellaws').style.background = "url(christmas2.jpg) center fixed";
    document.getElementById('hellaws').style.backgroundSize = "auto";
}
function myFunction3() {
    document.getElementById('hellaws').style.background = "url(summer.gif) center fixed";
    document.getElementById('hellaws').style.backgroundSize = "cover";
}
function myFunction4() {
    document.getElementById('hellaws').style.background = "url(winter.jpg) center fixed";
    document.getElementById('hellaws').style.backgroundSize = "cover";
    
}
function myFunction5() {
    document.getElementById('hellaws').style.background = "url(newyear.jpg)";
    document.getElementById('hellaws').style.backgroundSize = "cover";
}
function myFunction6() {
    document.getElementById('hellaws').style.background = "url(starry.gif)";
    document.getElementById('hellaws').style.backgroundSize = "auto";
}