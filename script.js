//console.log('Script connected')

//login page DOM and event manipulation
document.getElementById('login-btn')
.addEventListener('click', function(){
  // e.preventDefault()
  

   const mobileNumber = 1234055665010;

   const pinNumber = 112233;
  
   const mobileNumberValue = document.getElementById('mobile-number').value 
   const mobileNumberValueConverted = parseInt(mobileNumberValue)
   const pinNumberValue = document.getElementById('pin-number').value 
   const pinNumberValueConverted = parseInt(pinNumberValue)

 console.log(mobileNumberValueConverted, pinNumberValueConverted)


if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
   window.location.href = './homepage.html'
}
else{
   alert('Invalid number or password')

}
})