function calculateTax() {
  
    let salary = parseFloat(document.getElementById("salary").value);

   
    if (salary <= 100.0) {
      
      let tax = 0.0;

      
      document.getElementById("result").innerText = "Your tax is: $" + tax;
    } else {
      
      let additionalSalary = salary - 100;
      let additionalTax = Math.ceil(additionalSalary / 100) * 6; 

   
      document.getElementById("result").innerText =
        "Your tax is: $" + additionalTax;
    }

   
  }    