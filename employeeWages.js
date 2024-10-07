const readlineSync = require('readline-sync');

class Worker {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.attendance = Math.random() < 0.5 ? "Present" : "Absent"; 
        this.workType = this.getWorkType();
        this.salary = this.calculateSalary();
    }

    getWorkType() {
        if (this.attendance === "Present") {
            return Math.random() < 0.5 ? "Full-Time" : "Part-Time"; 
        }
        return "Absent"; 
    }

    calculateSalary() {
        const hourlyRate = 20;
        const hoursWorked = (this.attendance === "Present") ? (this.workType === "Full-Time" ? 8 : 4) : 0;
        return hourlyRate * hoursWorked; 
    }

    displayAttendance() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Attendance: ${this.attendance}`);
    }

    displayWages() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Salary: $${this.salary}`);
    }

    displayWorkType() {
        console.log(`Name: ${this.name}, Work Type: ${this.workType}`);
    }
}

const workers = [
    new Worker("Om Kakde", 101),
    new Worker("Raj Patil", 102),
    new Worker("Akshay Kumar", 103)
];

function displayMenu() {
    console.log("\n--- Attendance Menu ---");
    console.log("1) View Attendance");
    console.log("2) View Wages");
    console.log("3) Check Work Type");
    console.log("4) Exit");
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            console.log("\nAttendance Information:");
            workers.forEach(worker => worker.displayAttendance());
            break;
        case '2':
            console.log("\nWage Information:");
            workers.forEach(worker => worker.displayWages());
            break;
        case '3':
            console.log("\nWork Type Information:");
            workers.forEach(worker => worker.displayWorkType());
            break;
        case '4':
            console.log("Exiting the program!");
            process.exit(0);
        default:
            console.log("Invalid choice. Please select a valid option.");
    }
}

while (true) {
    displayMenu();
    const choice = readlineSync.question("Enter your choice (1/2/3/4): ");
    handleChoice(choice);
}
