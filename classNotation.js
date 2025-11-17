/**
 * Mini Project 1 – Class Notation
 * Created By Naufil.A
 *
 * This file implements the Course and Assignment concepts using ES6 classes.
 * It produces the same output as plainObjects.js and constructorFunctions.js.
 */

// Class: Assignment
class Assignment {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    printInfo() {
        console.log(`   Title: ${this.title} | Due Date: ${this.dueDate}`);
    }
}

// Class: Course

class Course {
    constructor(name, instructor, creditHours) {
        this.name = name;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = [];
    }

    addAssignment(assignment) {
        this.assignments.push(assignment);
    }

    courseInfo() {
        console.log(
            `Course: ${this.name} | Instructor: ${this.instructor} | Credit Hours: ${this.creditHours}`
        );
        console.log("Assignments >>>");

        this.assignments.forEach(a => a.printInfo());

        console.log(""); // blank line between courses (needed for exact output)
    }
}

// Create objects
let c1 = new Course("Software Engineering", "Dr. Pepper", 3);
c1.addAssignment(new Assignment("Project Proposal", "Jan 15"));
c1.addAssignment(new Assignment("Midterm Report", "Feb 20"));

let c2 = new Course("Data Science", "Dr. Evil", 6);
c2.addAssignment(new Assignment("Final Report", "Mar 30"));
c2.addAssignment(new Assignment("Presentation", "Apr 10"));

// Print the output
c1.courseInfo();
c2.courseInfo();
