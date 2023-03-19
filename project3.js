let taxationYear = 2023;

let salaryType = window.prompt(`Is the salary monthly or yearly?`);
    if (salaryType === `Yearly`){
        let salaryType = `Yearly`;
    } else if (salaryType === `Monthly`){
        let salaryType = `Monthly`;
    } else document.write(`Invalid; Refresh to try again`);

let grossIncome = window.prompt(`Input the ${salaryType} income`);
let incomeTax;

function monthlyIncomeTax(taxableIncome){
    let firstBracket = .1 * 24000;
    let secondBracket = .25 * (32333-24000);
    let thirdBracket = .3 * (grossIncome - 32333);

    if (taxableIncome>=11000 && taxableIncome<=24000){
        incomeTax = firstBracket;
    } else if (taxableIncome>24000 && taxableIncome<=32333){
        incomeTax = firstBracket + secondBracket;
    } else if (taxableIncome>32333){
        incomeTax = firstBracket + secondBracket + thirdBracket;
    }
}

function yearlyIncomeTax(taxableIncome){
    let firstBracket = .1 * 288000;
    let secondBracket = .25 * (388000-288000);
    let thirdBracket = .3 * (grossIncome - 388000);

    if (taxableIncome>=11000 && taxableIncome<=288000){
        incomeTax = firstBracket;
    } else if (taxableIncome>288000 && taxableIncome<=388000){
        incomeTax = firstBracket + secondBracket;
    } else if (taxableIncome>388000){
        incomeTax = firstBracket + secondBracket + thirdBracket;
    }
}

if (salaryType === `Monthly`){
    monthlyIncomeTax(taxableIncome = grossIncome);
} else if (salaryType === `Yearly`){
    yearlyIncomeTax(taxableIncome = grossIncome);
}


let benefitsAsk = window.prompt(`Does the user have NHIF or NSSF or both?`);
    if (benefitsAsk === `NHIF`){
        let benefitsAsk = `NHIF`;
    } else if (benefitsAsk === `NSSF`){
        let benefitsAsk = `NSSF`;
    } else if (benefitsAsk === `Both`){
        let benefitsAsk = `Both`
    }
let NHIF;
let NSSF;
let totalBenefits;

function NHIFCalculator(grossIncome){
    if (grossIncome>0 && grossIncome<6000){
        NHIF = 150;
    } else if (grossIncome>=6000 && grossIncome<8000){
        NHIF = 300;
    } else if (grossIncome>=8000 && grossIncome<12000){
        NHIF = 400;
    } else if (grossIncome>=12000 && grossIncome<15000){
        NHIF = 500;
    } else if (grossIncome>=15000 && grossIncome<20000){
        NHIF = 600;
    } else if (grossIncome>=20000 && grossIncome<25000){
        NHIF = 750;
    } else if (grossIncome>=25000 && grossIncome<30000){
        NHIF = 850;
    } else if (grossIncome>=30000 && grossIncome<35000){
        NHIF = 900;
    } else if (grossIncome>=35000 && grossIncome<40000){
        NHIF = 950;
    } else if (grossIncome>=40000 && grossIncome<45000){
        NHIF = 1000;
    } else if (grossIncome>=45000 && grossIncome<50000){
        NHIF = 1100;
    } else if (grossIncome>=50000 && grossIncome<60000){
        NHIF = 1200;
    } else if (grossIncome>=60000 && grossIncome<70000){
        NHIF = 1300;
    } else if (grossIncome>=70000 && grossIncome<80000){
        NHIF = 1400;
    } else if (grossIncome>=80000 && grossIncome<90000){
        NHIF = 1500;
    } else if (grossIncome>=90000 && grossIncome<100000){
        NHIF = 1600;
    } else if (grossIncome>=100000){
        NHIF = 1700;
    }
    totalBenefits = NHIF;
}

function NSSFCalculator(grossIncome){
    NSSF = .06 * grossIncome;
    totalBenefits = NSSF;
}

if (benefitsAsk === `NHIF`){
    NHIFCalculator(grossIncome=grossIncome);
} else if (benefitsAsk === `NSSF`){
    NSSFCalculator(grossIncome=grossIncome);
} /*else if (benefitsAsk === `Both`){
    totalBenefits = NHIF+NSSF;
}*/

let netSalary = grossIncome - incomeTax - totalBenefits;

function output (){
    document.write(`Taxation year: ${taxationYear}`);
    document.write(`;    Salary type: ${salaryType}`);
    document.write(`;    Gross income: ${grossIncome}`);
    document.write(`;    Income tax: ${incomeTax}`);
    document.write(`;    Benefits (NHIF/NSSF): ${benefitsAsk}`);
    document.write(`;    Total amount of benefits: ${totalBenefits}`);
    document.write(`;    Net income: ${netSalary}`);
}
output();