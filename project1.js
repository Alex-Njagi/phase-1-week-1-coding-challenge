let studentMarks = window.prompt(`Input the student's marks`);
//Defines the variable for student marks as a user prompt

let studentGrade;
//Defines a variable for the student's grade

if (studentMarks <0 || studentMarks >100){                  //Ensures the marks are between 0 and 1
    document.write(`Invalid marks; Refresh to try again`)
} else if (studentMarks>79 && studentMarks<=100){           //Returns an A grade if the mark is greater than 79         
    let studentGrade = `A`;
   document.write(`The student has scored an ${studentGrade}`);
} else if (studentMarks>=60 && studentMarks<=79){           //Returns a B grade if the mark is between 60 and 79
    let studentGrade = `B`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=49 && studentMarks<=59){           //Returns a grade of C if the mark is between 49 and 59
    let studentGrade = `C`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=40 && studentMarks<=49){           //Returns a grade of D if the mark is between 40 and 49
    let studentGrade = `D`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=0 && studentMarks<40){              //REturns a grade of E if the mark is between 0 and 40
    let studentGrade = `E`;
    document.write(`The student has scored a ${studentGrade}`);
}