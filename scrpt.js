function convert(){
    const input=document.getElementById("input").value;
    const type=document.getElementById("type").value;
    let result;
    if (type=="centigrade"){
        result=(input*9/5)+32;
        result="Temparature in Farehnhite is:" +result.toFixed(2)+ "\u00B0" ;
    }
    else{
        result=(input-32)*5/9;
        result="Temparature in Centigrade is:" +result.toFixed(2)+ "\u00B0";
    }
    document.getElementById("result").innerHTML=result
}