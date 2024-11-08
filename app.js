const edu = require("./Yuhang_Education");

console.log(edu.updateClassTutor(1, 1));
console.log(edu.addStudentToClass(1, 2));

try {
    let class1 = edu.getClass(1);
    console.log(class1);
    console.log(class1.student);
} catch (error) {
    console.log(error.message);
}

