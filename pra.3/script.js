function interestcalculator(){
let age=Number(document.getElementById("age").value);
let amount=Number(document.getElementById("amount").value);
let rate=Number(document.getElementById("rate").value);
let time=Number(document.getElementById("time").value);
if(age>=18){
    if(amount<=0||rate<0||time<=0){
        document.getElementById("result").innerHTML="cannot cannot calculate.";
}
    else{
        let interest=(amount*rate*time)/100;
        let Total=amount+interest;
        document.getElementById("result").innerHTML="simpleinterest="+interest.toFixed(2)+"<br>Total amount="+Total.toFixed(2);

}
}
else{
    document.getElementById("result").innerHTML="cannot cannot calculate.";
}
}