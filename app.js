function getnumber(num){
    var result = document.getElementById("result");
    result.value += num ;
}
function clearresult(){
    var result = document.getElementById("result");
    result.value = "" ;
}
function goback(){
    var result = document.getElementById("result");
    res = result.value;
    result.value = res.substring(0,res.length-1);
}
function getAnswer(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
   
    
}
