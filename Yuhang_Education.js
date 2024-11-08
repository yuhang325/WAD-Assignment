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

    /**
     * book a room
     * @param {int} roomIndex index of room
     * @param {int} classIndex index of class
     * @param {object} timeOptions can choose to enter index or a string
     * @param {int} timeOptions.timeIndex index of timing
     * @param {string} timeOptions.time string of a time (e.g. "09:00")
     * @returns {string} success/error message
     */
    bookRoom(roomIndex, classIndex, { timeIndex, time }) {
        let c = classes[classIndex];
        let r = rooms[roomIndex];

        if (c && r && (time || timeIndex)) {
            let t = timeIndex ? timeIndex : timing.indexOf(time);

            if (!timing[t]) {
                return "Please enter valid time"
            }

            for (let k in r.bookings) {
                if (k == t) {
                    return "Slot unavailable, please choose another slot"
                }
            }

            r.bookings[t] = classIndex;

            return "Sucessfully booked";
        }
        return "Please enter vaild info";
    },

    /**
     * get room info
     * @param {int} roomIndex index of room
     * @returns {JSON}
     */
    getRoom(roomIndex) {
        let r = rooms[roomIndex];
        if (r) {
            let bookings = {}
            for (let k in r.bookings) {
                // bookings[timing[key]] = this.getClass(r.bookings[key]);  //don't need so detail
                bookings[timing[k]] = classes[r.bookings[k]].course
            }
            return {
                room: r.room,
                bookings
            };
        }
        throw new Error("Room not found");
    },

    /**
     * get all room info
     * @returns {Array<JSON>}
     */
    getAllRoom() {
        let allRoom = [];
        rooms.forEach((e, i) => {
            allRoom.push(this.getRoom(i));
        });
        return allRoom;
    }
}