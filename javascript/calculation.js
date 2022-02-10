document.getElementById("diposit").addEventListener('click',function(){
    // terger element
    let depoInput= document.getElementById("dTaka");
        depoamout=parseFloat(depoInput.value);
    //  depoInput=depoInput.value;
     let newdipo= document.getElementById("depoTaka");
     let curreentDipo=parseFloat(newdipo.innerText);
       let ubdatedipo=  parseFloat(curreentDipo+depoamout);

        newdipo.innerText=ubdatedipo;

       //clear input
      depoInput.value=" ";

       const stingBalance=document.getElementById("total");
       const prevbalance= parseFloat(stingBalance.innerText);
       const ubdatebalance=prevbalance+depoamout;
       stingBalance.innerText=ubdatebalance;

})
document.getElementById("WithDrow").addEventListener('click',function(){
      const withwrowInpute= document.getElementById("withwrowInpute");
    //   convert the value string to number
      const withwrowInputeValue=parseFloat(withwrowInpute.value);
      const totalbalance= document.getElementById('total');
    //   convert the string to number
      const totalbalanceValue=parseFloat(totalbalance.innerText);
  
    //   calculation
    const withDroaAfterTotal=totalbalanceValue-withwrowInputeValue;
    // set inner text
    totalbalance.innerText=withDroaAfterTotal;
    

    // clear the input
    withwrowInpute.value=" ";
})