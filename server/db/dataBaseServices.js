const dbRun = require('./dataBaseRun');

const prepareDataBase = async () => {
    try {
        await dbRun(
            `CREATE TABLE IF NOT EXISTS employees (
                empID int NOT NULL AUTO_INCREMENT, 
                empName varchar(255) NOT NULL,
                empActive TEXT NOT NULL,
                empDepartmentID int NOT NULL,
                PRIMARY KEY (empID),
                FOREIGN KEY (empDepartmentID) REFERENCES departments(empDepartmentID)
            )`
        );
        await dbRun(
            `CREATE TABLE IF NOT EXISTS departments (
                departmentID int NOT NULL AUTO_INCREMENT, 
                departmentName varchar(255) NOT NULL,
                PRIMARY KEY (departmentID)
            )`
        )
    } catch (error) {
        throw error
    }
};
module.exports = {
    prepareDataBase
}