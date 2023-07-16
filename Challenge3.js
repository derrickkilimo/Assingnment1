const readlineSync = require('readline-sync');

// Function to calculate Payee Tax
function calculatePayeeTax(annualTaxablePay) {
  if (annualTaxablePay <= 288000) {
    return annualTaxablePay * 0.1;
  } else if (annualTaxablePay <= 388000) {
    return (annualTaxablePay - 288000) * 0.25 + 28800;
  } else {
    return (annualTaxablePay - 388000) * 0.3 + 59550;
  }
}

// Calculate NHIF Deductions
function calculateNHIFDeductions(grossPay) {
  // Deduction rates according to gross pay
  if (grossPay <= 5999) {
    return 150;
  } else if (grossPay <= 7999) {
    return 300;
  } else if (grossPay <= 11999) {
    return 400;
  } else if (grossPay <= 14999) {
    return 500;
  } else if (grossPay <= 19999) {
    return 600;
  } else if (grossPay <= 24999) {
    return 750;
  } else if (grossPay <= 29999) {
    return 850;
  } else if (grossPay <= 34999) {
    return 900;
  } else if (grossPay <= 39999) {
    return 950;
  } else if (grossPay <= 49999) {
    return 1000;
  } else if (grossPay <= 59999) {
    return 1100;
  } else if (grossPay <= 69999) {
    return 1200;
  } else if (grossPay <= 79999) {
    return 1300;
  } else if (grossPay <= 89999) {
    return 1400;
  } else if (grossPay <= 99999) {
    return 1500;
  } else {
    return 1600;
  }
}

// Calculate NSSF Deductions
function calculateNSSF(pensionablePay) {
  if (pensionablePay <= 6000) {
    return pensionablePay * 0.06;
  } else if (pensionablePay <= 18000) {
    return pensionablePay * 0.06;
  } else {
    return 1080; 
  }
}

// Calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
  const grossPay = basicSalary + benefits;
  const annualTaxablePay = grossPay * 12;
  const payeeTax = calculatePayeeTax(annualTaxablePay);
  const nhifDeductions = calculateNHIFDeductions(grossPay);
  const nssfDeductions = calculateNSSF(basicSalary);
  const netSalary = grossPay - payeeTax - nhifDeductions - nssfDeductions;

  return netSalary;
}

// Prompt user to enter basic salary and benefits
const basicSalary = parseFloat(readlineSync.question("Enter basic salary (Ksh): "));
const benefits = parseFloat(readlineSync.question("Enter benefits (Ksh): "));

// Calculate the net salary
const netSalary = calculateNetSalary(basicSalary, benefits);

// Display Net salary
console.log("Net Salary: ", netSalary.toFixed(2));
