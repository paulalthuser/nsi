function findOS() {
    var OS = "inconnu"
    if (navigator.userAgent.indexOf("Mac") != -1) OS =  "Macintosh"; 
    if (navigator.userAgent.indexOf("Linux") != -1) OS =  "Linux"; 
    if (navigator.userAgent.indexOf("Android") != -1) OS =  "Android"; 
    if (navigator.userAgent.indexOf("like Mac") != -1) OS =  "iOS";
    if (navigator.userAgent.indexOf("Win") != -1) OS = "Windows"; 
    document.getElementById("OS").innerHTML = OS;
}