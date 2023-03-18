let studentMarks;
let studentGrade;

do {
    let studentMarks = prompt(`Input the student's marks`);
} while (studentMarks <0 || studentMarks >100)

if (studentMarks>79){
    let studentGrade = `A`;
    console.log(`The student has scored an ${studentGrade}`);
} else if (studentMarks>=60 && studentMarks<=79){
    let studentGrade = `B`;
    console.log(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=49 && studentMarks<=59){
    let studentGrade = `C`;
    console.log(`The student has scored a ${studentGrade}`);
} else if (studentMarks>=40 && studentMarks<=49){
    let studentGrade = `D`;
    console.log(`The student has scored a ${studentGrade}`);
} else if (studentMarks<40){
    let studentGrade = `E`;
    console.log(`The student has scored a ${studentGrade}`);
}