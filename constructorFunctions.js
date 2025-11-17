/**
 * Mini Project 1 – Constructor Functions
 * Created by Naufil.A
 *
 * This program reproduces the exact output of plainObjects.js
 * using constructor functions.
 */

// Constructor: Assignment
function Assignment(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
}

Assignment.prototype.printInfo = function () {
    console.log(`   Title: ${this.title} | Due Date: ${this.dueDate}`);
};

// Constructor: Course
function Course(name, instructor, creditHours) {
    this.name = name;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = [];
}

Course.prototype.addAssignment = function (assignment) {
    this.assignments.push(assignment);
};

Course.prototype.courseInfo = function () {
    console.log(
        `Course: ${this.name} | Instructor: ${this.instructor} | Credit Hours: ${this.creditHours}`
    );
    console.log("Assignments >>>");

    this.assignments.forEach(a => a.printInfo());

    console.log(""); // blank line between courses
};

// Create objects

// Course 1
let c1 = new Course("Software Engineering", "Dr. Pepper", 3);
c1.addAssignment(new Assignment("Project Proposal", "Jan 15"));
c1.addAssignment(new Assignment("Midterm Report", "Feb 20"));

// Course 2
let c2 = new Course("Data Science", "Dr. Evil", 6);
c2.addAssignment(new Assignment("Final Report", "Mar 30"));
c2.addAssignment(new Assignment("Presentation", "Apr 10"));


c1.courseInfo();
c2.courseInfo();