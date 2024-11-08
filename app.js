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

try {
    let room = edu.getRoom(0);
    console.log(room);
    console.log(room.bookings);
    console.log(room.bookings["09:00"]);
} catch (error) {
    console.log(error.message);
}
