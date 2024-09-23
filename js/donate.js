document.getElementById('donate-now-1').addEventListener('click',function(event){
    event.preventDefault();
  const donateInput1=document.getElementById('input-1').value;
   const mainBalance=document.getElementById('mainballance').innerText;
   const mainBalanceConvert=parseFloat(mainBalance);
  const donateInput1Convert=parseFloat(donateInput1);
  const ballance1=document.getElementById('ballance1').innerText;
  const balance1Convert=parseFloat(ballance1);

  
if(donateInput1Convert> 0 && mainBalanceConvert>=donateInput1Convert )
{
   const newBalance=mainBalanceConvert-donateInput1Convert;
   const newBalance1=balance1Convert+donateInput1Convert;
   document.getElementById('mainballance').innerText=newBalance;
   document.getElementById('ballance1').innerText=newBalance1;
}
else if(donateInput1Convert>mainBalanceConvert)
{
    alert("Not Enough Balance")
}
else{
    alert("Please Enter Correct Value")
}
})