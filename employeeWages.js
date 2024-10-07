class Staff {
    constructor(empName, empId) {
        this.empName = empName;  
        this.empId = empId;      
        this.attendanceStatus = generateRandom();  
    }

    checkAttendance() {
        return this.attendanceStatus ? "Present" : "Absent";
    }

    showDetails() {
        console.table([{ Name: this.empName, ID: this.empId, Attendance: this.checkAttendance() }]);
    }
}

function generateRandom() {
    return Math.random() < 0.5 ? 0 : 1;
}

const staff1 = new Staff("Om Kakde", 101);
staff1.showDetails();

const staff2 = new Staff("Raj Patil", 102);
staff2.showDetails();
