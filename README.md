# Functions
0. [Dummy Data](#data)
1. [updateClassTutor](#updateclasstutor)
2. [addStudentToClass](#addstudenttoclass)
3. [getClass](#getClass)
4. [bookRoom](#bookRoom)
5. [getRoom](#getRoom)
6. [getAllRoom](#getAllRoom)

## Data
- `tutors`: array of tutor name `Array<string>`
- `students`: array of student name `Array<string>`
- `timing`: array of time `e.g.:"08:00"` `Array<string>`
- `classes`: array of class `Array<JSON>`
```js
var classess = [
    {
        "course": "string"  //course name
        "tutor": int        //index of tutors
        "student": [int]    //array of student index
    }
]

```
- `rooms`: array of room `Array<JSON>`
```js
var rooms = [
    {
        "room": int     //room number
        "bookings": {
            timingIndex : classesIndex
        }
    }
]
```

## updateClassTutor
```js
updateClassTutor(classIndex, tutorIndex)
```
### Explanation:
- Change the tutor for a class
- `classIndex`: Index of the classes `int`
- `tutorIndex`: Index of the tutor `int`
- `return`: Success/error message `string`

## addStudentToClass
```js
addStudentToClass(classIndex, studentIndex)
```
### Explanation:
- Add a student to a class
- `classIndex`: Index of the classes `int`
- `studentIndex`: Index of the student `int`
- `return`: Success/error message `string`

## getClass
```javascript
getClass(classIndex)
```
### Explanation:
- Get the selected class info
- `classIndex`: Index of the classes `int`
- `return`: 
```json
{
    "course": "string"     //course name,
    "tutor": "string"      //tutor name,
    "student": ["string"]  //array of student names
}
```

## bookRoom
```js
bookRoom(roomIndex, classIndex, { timeIndex, time }) 
```
### Explanation:
- Book a room slot
- `roomIndex`: Index of the room `int`
- `classIndex`: Index of the classes `int`
- time
    - `timeIndex`: index of timing `int`  
        or
    - `time`: time (e.g. "09:00") `string`
- `return`: Success/error message `string`

## getRoom
```js
getRoom(roomIndex)
```
### Explanation:
- Get the room info
- `roomIndex`: Index of the room `int`
- `return`: 
```json
{
    "room": int, //room number
    "bookings": {
        "string" /*time*/ : "string" //course name
        //e.g.: 
        "09:00": "Infocomm System Project",
        "10:00": "Infocomm System Project"
    }
}
```
## getAllRoom
```js
getAllRoom()
```
### Explanation:
- Get all room info
- `return`: 
```json
[
    {
        "room": int, //room number
        "bookings": {
            "string" /*time*/ : "string" //course name
            //e.g.: 
            "09:00": "Infocomm System Project",
            "10:00": "Infocomm System Project"
        }
    }
]
```
# References
- [GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Google](http://www.google.com)
- 