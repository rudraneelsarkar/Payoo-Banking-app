//console.log('homepage connected')
 // add money function engine
 const validPin = 112233
document.getElementById('add-money-btn')
.addEventListener('click', function(e){
   e.preventDefault()
    //console.log('button clicked')
    const bank = document.getElementById('bank').value
    const accountNumber =  document.getElementById('account-number').value
   const amount = parseInt(document.getElementById('amount-add').value)
   const pinNumber = parseInt(document.getElementById('pin-code').value)
    const balance = parseInt(document.getElementById('available-balance').innerText)
      // console.log(balance)
      if(accountNumber.length < 11){
         alert('Please provide valid account number');
         return 0;
      }
      if(validPin !== pinNumber ){
         alert('invalid pin number!')
         return 0;
      }
      const totalNewBalance = amount + balance
      document.getElementById('available-balance').innerText = totalNewBalance
}) 
 
 
// cash out function engine 
 const Pin = 112233
document.getElementById('withdraw-button')
.addEventListener('click', function(e){
    e.preventDefault()
   //  console.log('cash out btn clicked')
   const amount = parseInt(document.getElementById('withdraw-amount').value)
   
   const availableBalance = parseInt(document.getElementById('available-balance').innerText)
   //console.log(amount,availableBalance)

const agentNumber =  document.getElementById('agent-number').value

   if(agentNumber.length < 11){
         alert('Please provide valid 11 digit number');
         return;
      }

      const pinNumber = parseInt(document.getElementById('pin-code').value)

      if(Pin !== pinNumber ){
         alert('invalid pin number!')
         return;
      }


   const totalNewAvailableBalance = availableBalance - amount 
  document.getElementById('available-balance').innerText = totalNewAvailableBalance

   

})

















//Toggling Features 
   //this feature works add money to cash out and cash out to add money
document.getElementById('add-button')
.addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
}) 

//this feature works cash out to add money and add money to cash out
document.getElementById('cash-out-button')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
    
}) 





