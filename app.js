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

console.log(edu.bookRoom(0, 2, { time: "12:00" }));
console.log(edu.bookRoom(0, 2, { timeIndex: 5 }));

try {
    let room = edu.getRoom(0);
    console.log(room);
    console.log(room.bookings);
} catch (error) {
    console.log(error.message);
}

console.log(edu.getAllRoom());
console.log(edu.getAllRoom()[1].bookings);


