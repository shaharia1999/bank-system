// terget the input

function inputValue(input){
    const clintInput= document.getElementById(input);
    const clintInputVlue= parseFloat(clintInput.value);
    clintInput.value=" ";
    return clintInputVlue;
}

//terget the innerTextBox
function ubdateDepositAanWithdrow(balance){
  let praveBalance= document.getElementById(balance);
  let praveBalanceValue=parseFloat(praveBalance.innerText);
  return praveBalanceValue;


}
//// terget the total balance InnerText
function total(){
  const stingBalance=document.getElementById("total");
  const prevbalance= parseFloat(stingBalance.innerText);
  return prevbalance;
  
}



//////////////////////////////////// deposit add event Lisener

document.getElementById("diposit").addEventListener('click',function(){

  //// deposit amout
    const enterInput=inputValue('dTaka');
    const balanceIncrese=ubdateDepositAanWithdrow("depoTaka");
    const UbdateBalace=  parseFloat(enterInput+balanceIncrese);
    let praveBalance= document.getElementById("depoTaka");
     let ubdatepraveDiposit=praveBalance.innerText=UbdateBalace;

  ///// after deposit total
  const increaseBalance=total('total');
  const latestTotal=increaseBalance+ubdatepraveDiposit;
  const totalmYbalance=document.getElementById("total");
  totalmYbalance.innerText=latestTotal;


})




///// /////////////////////////WithDrow add event liseler

document.getElementById("WithDrow").addEventListener('click',function(){

/// with drow amout 
  const enterInput=inputValue('withwrowInpute');
  const balanceIncrese=ubdateDepositAanWithdrow("showWithdrow");
  const UbdateBalace=  parseFloat(enterInput+balanceIncrese);
  let praveBalance= document.getElementById("showWithdrow");
  let ubdatepraveWithdrow=praveBalance.innerText=UbdateBalace;

//// after withdrow totaal
    const increaseBalance=total('total');
    const latestTotal=increaseBalance-ubdatepraveWithdrow;
    const totalmYbalance=document.getElementById("total");
    totalmYbalance.innerText=latestTotal;
})
document.getElementById("log out").addEventListener('click',function(){
    window.location="https://shaharia1999.github.io/bank-system/";
});