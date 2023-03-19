let taxationYear = 2023;
//Assigns the current year of taxation a variable

let salaryType = window.prompt(`Is the salary monthly or yearly?`);     //Creates a variable that prompts for the user's salary type
    if (salaryType === `Yearly`){
        let salaryType = `Yearly`;
    } else if (salaryType === `Monthly`){
        let salaryType = `Monthly`;
    }                                                                   //Validates that the salary type is either monthly or yearly

let grossIncome = window.prompt(`Input the ${salaryType} income`);      //Creates a variable that prompts the user to input their salary
let incomeTax;
//Assigns the income tax a variable

function monthlyIncomeTax(taxableIncome){                               //Creates a function that calculates income tax on a monthly basis
    let firstBracket = .1 * 24000;
    let secondBracket = .25 * (32333-24000);
    let thirdBracket = .3 * (grossIncome - 32333);
    //Creates variables that calculate tax according to the tax brackets
    if (taxableIncome>=11000 && taxableIncome<=24000){
        incomeTax = firstBracket;
    } else if (taxableIncome>24000 && taxableIncome<=32333){
        incomeTax = firstBracket + secondBracket;
    } else if (taxableIncome>32333){
        incomeTax = firstBracket + secondBracket + thirdBracket;
    }
    //Assigns the income tax a value based on the tax brackets
}

function yearlyIncomeTax(taxableIncome){                                //Creates a function that calculates income tax on a monthly basis
    let firstBracket = .1 * 288000;
    let secondBracket = .25 * (388000-288000);
    let thirdBracket = .3 * (grossIncome - 388000);
    //Creates variables that calculate tax according to the tax brackets
    if (taxableIncome>=11000 && taxableIncome<=288000){
        incomeTax = firstBracket;
    } else if (taxableIncome>288000 && taxableIncome<=388000){
        incomeTax = firstBracket + secondBracket;
    } else if (taxableIncome>388000){
        incomeTax = firstBracket + secondBracket + thirdBracket;
    }
    //Assigns the income tax a value based on the tax brackets
}

if (salaryType === `Monthly`){
    monthlyIncomeTax(taxableIncome = grossIncome);                      //Invokes the monthlyIncomeTax function
} else if (salaryType === `Yearly`){
    yearlyIncomeTax(taxableIncome = grossIncome);                       //Invokes the yearlyIncomeTax function
}

let benefitsAsk = window.prompt(`Does the user have NHIF or NSSF or both?`);
//Creates a variable that prompts for the user's benefits
    if (benefitsAsk === `NHIF`){                        //Validates whether the user has NHIF
        let benefitsAsk = `NHIF`;
    } else if (benefitsAsk === `NSSF`){                 //Validates whether the user has NSSF
        let benefitsAsk = `NSSF`;
    }

let NHIF;                                               //Assigns the NHIF value a variable
let NSSF;                                               //Assigns the NSSF value a variable
let totalBenefits;                                      //Assigns the user's benefits' value a variable

function NHIFCalculator(grossIncome){                   //Creates a function for calculating the NHIF benefits
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
    totalBenefits = NHIF;                               //Assigns the total benefits the NHIF benefits value
}

function NSSFCalculator(grossIncome){                   //Creates a function for calculating the NHIF benefits
    NSSF = .06 * grossIncome;
    totalBenefits = NSSF;                               //Assigns the total benefits the NSSF benefits value
}

if (benefitsAsk === `NHIF`){
    NHIFCalculator(grossIncome=grossIncome);            //Invokes the NHIFCalculator function
} else if (benefitsAsk === `NSSF`){
    NSSFCalculator(grossIncome=grossIncome);            //Invokes the NSSFCalculator function
}

let netSalary = grossIncome - incomeTax - totalBenefits;
//Calculates the user's net income

function output (){                                                     //Creates a function for the final outputs
    document.write(`Taxation year: ${taxationYear}`);                   //Output the year of taxation
    document.write(`;    Salary type: ${salaryType}`);                  //Output the salary type
    document.write(`;    Gross income: ${grossIncome}`);                //Output the gross income
    document.write(`;    Income tax: ${incomeTax}`);                    //Output the income tax
    document.write(`;    Benefits (NHIF/NSSF): ${benefitsAsk}`);        //Output the user's benefits
    document.write(`;    Total amount of benefits: ${totalBenefits}`);  //Output the benefits' value
    document.write(`;    Net income: ${netSalary}`);                    //Output the user's net income
}
output();
//Invoke the final output function