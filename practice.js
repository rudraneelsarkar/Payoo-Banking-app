//shared function calling method
   //function to get input value number
 function getInputValueNumber (id){
       const inputField = document.getElementById(id)
       const inputFieldValue = inputField.value 
       const inputFieldValueNumber =parseInt(inputFieldValue)
    return inputFieldValueNumber;
 }

  //function to get inner text
  function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText 
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
  }


//       transfer money
  document.getElementById('add-money-parent').style.display = 'none'
  document.getElementById('cash-out-parent').style.display = 'none'
   document.getElementById('transfer-money-parent').style.display = 'block'

          // cash out
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
    document.getElementById('transfer-money-parent').style.display = 'none'

                 //add money
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
     document.getElementById('transfer-money-parent').style.display = 'none'