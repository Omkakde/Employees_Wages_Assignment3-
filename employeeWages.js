const readlineSync = require('readline-sync');

class Worker {
    static HOURLY_WAGE = 20;
    static FULL_DAY_HOURS = 8;
    static PART_DAY_HOURS = 4;
    static MAX_HOURS = 100;
    static MAX_DAYS = 20;

    constructor(workerName, workType = 'full-time') {
        this.workerName = workerName;
        this.workType = workType;
        this.totalSalary = 0;
        this.totalHours = 0;
        this.totalDays = 0;
        this.calculateWageForMonth();
    }

    static getAttendance() {
        const presentOrNot = Math.floor(Math.random() * 2);
        return presentOrNot === 1 ? "Present" : "Absent";
    }

    calculateDailyPay(hours) {
        return Worker.HOURLY_WAGE * hours;
    }

    calculateWageForMonth() {
        let totalDayOfMonth = 30;  // Assuming a 30-day month
        while (this.totalHours < Worker.MAX_HOURS && this.totalDays < Worker.MAX_DAYS && totalDayOfMonth >= 1) {
            totalDayOfMonth--;
            const dailyAttendance = Worker.getAttendance();
            let hoursWorked = this.workType === 'part-time' ? Worker.PART_DAY_HOURS : Worker.FULL_DAY_HOURS;

            if (dailyAttendance === "Present") {
                if (this.totalHours + hoursWorked > Worker.MAX_HOURS) {
                    hoursWorked = Worker.MAX_HOURS - this.totalHours;
                }
                this.totalSalary += this.calculateDailyPay(hoursWorked);
                this.totalHours += hoursWorked;
                this.totalDays++;
            }
        }
    }
}

const workersList = [
    new Worker("Om", "full-time"),
    new Worker("Raj", "full-time"),
    new Worker("Akshay", "part-time"),
    new Worker("Monu", "full-time"),
    new Worker("Sonu", "part-time")
];

function showWorkerInfo(choice) {
    let workerDetails;
    if (choice === 1) {
        workerDetails = workersList.map(worker => ({
            Name: worker.workerName,
            Type: worker.workType,
            DaysWorked: worker.totalDays,
            HoursWorked: worker.totalHours
        }));
        console.table(workerDetails);
    } else if (choice === 2) {
        workerDetails = workersList.map(worker => ({
            Name: worker.workerName,
            Type: worker.workType,
            TotalSalary: worker.totalSalary,
            DaysWorked: worker.totalDays,
            HoursWorked: worker.totalHours
        }));
        console.table(workerDetails);
    } else {
        console.log("Invalid option. Please select 1, 2, or 3.");
    }
}

let stop = false;

while (!stop) {
    console.log("\nSelect an option:");
    console.log("1) Show Attendance Details");
    console.log("2) Show Salary Details");
    console.log("3) Exit");

    const userChoice = readlineSync.question("Enter your choice: ");

    if (userChoice === '1') {
        showWorkerInfo(1);
    } else if (userChoice === '2') {
        showWorkerInfo(2);
    } else if (userChoice === '3') {
        stop = true;
        console.log("Exiting the program. Thank you!");
    } else {
        console.log("Invalid option. Please select 1, 2, or 3.");
    }
}
