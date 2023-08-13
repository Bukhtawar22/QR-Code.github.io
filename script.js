var input = document.getElementById('inp');
var img = document.getElementById('img');

function myFun(){
    var value = input.value;
    if (value){
        img.style.border="1px solid silver";
        img.style.padding="3px";
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;

    }else{
        alert("Please enter some text");
    }
}