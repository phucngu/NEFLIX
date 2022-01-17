function btn(){
    var arr = document.getElementsByTagName('input');
    var email = arr[0].value;
    var password = arr[1].value;
    
    if(email == ""|| password == ""||){
        alert("dang nhap lai");
    }
}