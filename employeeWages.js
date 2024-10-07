const readlineSync = require('readline-sync');

class Worker {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.attendance = Math.random() < 0.5 ? "Present" : "Absent"; 
        this.workType = this.getWorkType();
    }

    getWorkType() {
        return this.attendance === "Present" ? (Math.random() < 0.5 ? "Full-Time" : "Part-Time") : "Absent"; 
    }

    wageFullTime() {
        return 8 * 20; 
    }

    wagePartTime() {
        return 4 * 20; 
    }

    calculateDailyWages() {
        switch (this.workType) {
            case "Full-Time":
                return this.wageFullTime();
            case "Part-Time":
                return this.wagePartTime();
            case "Absent":
                return 0; 
            default:
                return 0; 
        }
    }

    calculateMonthlyWages() {
        let totalWages = 0;
        for (let i = 0; i < 20; i++) {
            this.attendance = Math.random() < 0.5 ? "Present" : "Absent"; 
            this.workType = this.getWorkType();
            totalWages += this.calculateDailyWages();
        }
        return totalWages;
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
    console.log("2) View Daily Wages");
    console.log("3) View Work Type");
    console.log("4) Calculate Monthly Wages");
    console.log("5) Exit");
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            workers.forEach(worker => {
                console.log(`ID: ${worker.id}, Name: ${worker.name}, Attendance: ${worker.attendance}`);
            });
            break;
        case '2':
            workers.forEach(worker => {
                console.log(`Name: ${worker.name}, Daily Wages: $${worker.calculateDailyWages()}`);
            });
            break;
        case '3':
            workers.forEach(worker => {
                console.log(`Name: ${worker.name}, Work Type: ${worker.workType}`);
            });
            break;
        case '4':
            workers.forEach(worker => {
                console.log(`Name: ${worker.name}, Monthly Salary: $${worker.calculateMonthlyWages()}`);
            });
            break;
        case '5':
            console.log("Exiting the program!");
            process.exit(0);
        default:
            console.log("Invalid choice. Please select a valid option.");
    }
}

while (true) {
    displayMenu();
    const choice = readlineSync.question("Enter your choice (1/2/3/4/5): ");
    handleChoice(choice);
}
