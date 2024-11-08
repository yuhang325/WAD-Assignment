var tutors = [
    "Ali",
    "Beatriz",
    "Charles"
];
var students = [
    "Yuhang",
    "Wenqi",
    "Marco",
    "Fahan",
    "Diya",
];
var classes = [
    { course: "Cross Platform Mobile App Development", tutor: 0, student: [1, 2, 3] },
    { course: "Infocomm System Project", tutor: 1, student: [1, 3, 4] },
    { course: "Web API Development", tutor: 2, student: [2, 3, 4] }
];
var timing = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
//in bookings first number is the index of timing
//second is classes
var rooms = [
    { room: 1, bookings: { 0: 0, 1: 0, 2: 1, 3: 1 } },
    { room: 2, bookings: { 0: 0 } }
];

module.exports = {
    //change class tutor
    //add student to class
    //get class info
    //get room info
    //book a room
    //get all booked rooms (maybe)

    /**
     * change the tutor for a class
     * @param {int} classIndex index of classes
     * @param {int} tutorIndex index of tutor
     * @returns {string} success/error message
     */
    updateClassTutor(classIndex, tutorIndex) {
        let c = classes[classIndex];

        if (c && tutors[tutorIndex]) {
            c.tutor = tutorIndex;

            return "Sucessfully change " + c.course + "'s tutor to: " + tutors[tutorIndex];
        } else if (c) {
            return "Tutor not found";
        }
        return "Class not found";
    },

    /**
     * add student to class
     * @param {int} classIndex index of classes
     * @param {int} studentIndex index of students
     * @returns {string} success/error message
     */
    addStudentToClass(classIndex, studentIndex) {
        let c = classes[classIndex];

        if (c && students[studentIndex]) {
            //check if index exist in array
            if (!c.student.find(s => s === studentIndex)) {
                c.student.push(studentIndex);

                return "Sucessfully added " + students[studentIndex] + " to " + c.course;
            }

            return "Student already exist";
        } else if (c) {
            return "Student not found";
        }

        return "Class not found";
    },

    /**
     * get class info
     * @param {int} classIndex index of classes
     * @returns {JSON}
     */
    getClass(classIndex) {
        let c = classes[classIndex];
        if (c) {
            let student = [];

            c.student.forEach(e => {
                student.push(students[e])
            });

            return {
                course: c.course,
                tutor: tutors[c.tutor],
                student
            };
        }
        throw new Error("Class not found");
    },

    getRoom(roomIndex) {
        let r = rooms[roomIndex];
        if (r) {
            let bookings = {}
            for (let key in r.bookings) {
                // bookings[timing[key]] = this.getClass(r.bookings[key]);  //don't need so detail
                bookings[timing[key]] = classes[r.bookings[key]].course
            }
            return {
                room: r.room,
                bookings
            };
        }
        throw new Error("Room not found");
    }
}