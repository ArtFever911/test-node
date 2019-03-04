const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');


/**
 * Add new employee to data base
 * @param {object} req - express request object
 * @returns {object} res
 */
const createEmployee = async (req, res, next) => {
    const { name, active, department } = req.body;
    try {
        /**
         * Search department by name in data base
         */
        departmentID = await model.searchDepartmentByName(department)
        /**
         * Create department if is not exist
         */
        if (departmentID && departmentID.length == 0) {
            departmentID = await model.addDepartment(department);
        }
        /**
         * Create employee in data  base
         */
        const result = await model.addEmployee(name, active, departmentID);
        /**
         * Send server response with data
         */
        responseHelper(res, result.insertId, 'CREATED')

    } catch (error) {
        next(error);
    }
}



module.exports = createEmployee;