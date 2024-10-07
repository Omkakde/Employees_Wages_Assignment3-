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




