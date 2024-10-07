const readlineSync = require('readline-sync');

class Worker {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.attendance = Math.random() < 0.5 ? "Present" : "Absent"; 
        this.salary = this.calculateSalary();
    }

    calculateSalary() {
        const hourlyRate = 20;
        const hoursWorked = this.attendance === "Present" ? 8 : 0; 
        return hourlyRate * hoursWorked;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Attendance: ${this.attendance}`);
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
    console.log("3) Exit");
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            console.log("\nAttendance Information:");
            workers.forEach(worker => worker.displayInfo());
            break;
        case '2':
            console.log("\nWage Information:");
            workers.forEach(worker => {
                console.log(`Name: ${worker.name}, ID: ${worker.id}, Salary: ${worker.salary}`);
            });
            break;
        case '3':
            console.log("Exiting the program!");
            process.exit(0);
        default:
            console.log("Invalid choice. Please select a valid option.");
    }
}

while (true) {
    displayMenu();
    const choice = readlineSync.question("Enter your choice (1/2/3): ");
    handleChoice(choice);
}
