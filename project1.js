let studentMarks = window.prompt(`Input the student's marks`);
let studentGrade;

if (studentMarks <0 || studentMarks >100){
    document.write(`Invalid marks; Refresh to try again`)
} else if (studentMarks>79 && studentMarks<=100){
    let studentGrade = `A`;
   document.write(`The student has scored an ${studentGrade}`);
} else if (studentMarks>=60 && studentMarks<=79){
    let studentGrade = `B`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=49 && studentMarks<=59){
    let studentGrade = `C`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=40 && studentMarks<=49){
    let studentGrade = `D`;
    document.write(`The student has scored a ${studentGrade}`);
} else if (studentMarks>0 && studentMarks<40){
    let studentGrade = `E`;
    document.write(`The student has scored a ${studentGrade}`);
}