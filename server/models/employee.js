const dbRun = require('../db/dataBaseRun');


/**
 * Add new employee to data base
 *  * @param {number} id
 * @param {string} name
 * @param {string} active
 * @param {number} departmentID
 * @returns {object} 
 */
const addEmployee = async (name, active, departmentID) => {
    try {
        /**
         * Create employee in data  base
         */
        const res = await dbRun(
            `
            INSERT INTO employees (empName, empActive, empDepartmentID)
            VALUES (?, ?, ?)
            `,
            [name, active, departmentID]
        );
        return res;

    } catch (error) {
        throw error;
    }
}


/**
 * Update employee from data base by id
 * @param {number} id
 * @param {string} name
 * @param {string} active
 * @param {number} departmentID
 * @returns {object} 
 */
const updateEmployee = async (id, name, active, departmentID) => {
    try {
        /**
         * Update employee in data  base
         */
        const res = await dbRun(
            `
            UPDATE employees
            SET empName = ?,empActive=?,empDepartmentID=?
            WHERE empID = ?;
            `,
            [name, active, departmentID, id]
        );
        return res;

    } catch (error) {
        throw error;
    }
}


/**
 * Delete employee from data base
 * @param {number} id - express request object
 * @returns {object} 
 */
const deleteEmployee = async (id) => {
    try {
        const res = await dbRun(
            `DELETE FROM employees WHERE empID=?`,
            [+id]
        );
        return res;
    } catch (error) {
        throw error;
    }

}


/**
 * Select an employee from data base by id
 * @param {number} id - express request object
 * @returns {object} 
 */
const getOneEmployee = async (id) => {
    try {
        const res = await dbRun(
            `
            SELECT * FROM employees 
            INNER JOIN departments ON employees.empDepartmentID=departments.departmentID
            WHERE employees.empID=?
            `,
            [id]
        );
        return res;
    } catch (error) {
        throw error
    }
}


/**
 * Select many employees from data base 
 * @param {number} page
 * @param {number} limit
 * @returns {object} 
 */
const getAllEmployeesCount = async () => {
    try {
        const res = await dbRun(
            `SELECT count(*) FROM employees`,
        );
        return res;
    } catch (error) {
        throw error
    }
}
const getManyEmployees = async (page, limit) => {
    try {
        const offset = (+page - 1) * +limit;
        const res = await dbRun(
            `
            SELECT * FROM employees 
            INNER JOIN departments ON employees.empDepartmentID=departments.departmentID
            LIMIT ? OFFSET ?
            `,
            [+limit, +offset]
        );
        return res;
    } catch (error) {
        throw error
    }
}


/**
 * Find en employee in data base by name
 * @param {string} name - express request object
 * @returns {object} 
 */
const searchEmployeesByName = async (name) => {
    try {
        const res = await dbRun(
            `
            SELECT * FROM employees
            INNER JOIN departments ON employees.empDepartmentID=departments.departmentID 
            WHERE empName like ?
            `,
            [name]
        );
        return res;
    } catch (error) {
        throw error
    }
}


/**
 * Find a deparment in data base by name
 * @param {string} name - express request object
 * @returns {object} 
 */
const searchDepartmentByName = async (name) => {
    try {
        const res = await dbRun(
            `SELECT departmentID FROM departments WHERE departmentName = ?`,
            [name]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

/**
 * Create new department in data base with given name
 * @param {string} name - Name of new department in data base
 * @returns {object}
 */
const addDepartment = async (name) => {
    try {
        const res = await dbRun(
            `
                INSERT INTO departments (departmentName)
                VALUES (?)
            `,
            [name]
        );
        return res;
    } catch (error) {
        throw error;
    }
}


/**
 * Update department in data base by id
 * @param {number} id - Name of new department in data base
 * @returns {number} - Id of new department in data base
 */
const updateDepartment = async (id) => {
    try {
        const res = await dbRun(
            `
            UPDATE departments
            SET departmnentName = ?,
            WHERE departmnetID = ?;
            `,
            [name, id]
        );
        return res;
    } catch (error) {
        throw error;
    }
}


/**
 * Delete department in data base
 * @param {number} id - Name of deleting department in data base
 * @returns {number} - Id of deleted department in data base
 */
const deleteDepartment = async (id) => {
    try {
        const res = await dbRun(
            `DELETE FROM departments WHERE departmentID=?`,
            [id]
        );
        return res;
    } catch (error) {
        throw error
    }
}
module.exports = {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getOneEmployee,
    getManyEmployees,
    getAllEmployeesCount,
    searchEmployeesByName,
    addDepartment,
    updateDepartment,
    deleteDepartment,
    searchDepartmentByName
}