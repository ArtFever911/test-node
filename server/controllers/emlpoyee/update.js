const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');

/**
 * Update employee from data base by id
 * @param {object} req - express request object
 */
const updateEmployee = async (req, res, next) => {
    const { id } = req.params;
    const { name, active, department } = req.body;
    try {
        /**
         * Search department by name in data base
         */
        let departmentID;
        let departments = await model.searchDepartmentByName(department)
        /**
         * Create department if is not exist
         */
        if (departments && departments.length == 0) {
            departments = await model.addDepartment(department);
        }
        departmentID = departments[0].departmentID;
        /**
         * Update employee in data  base
         */
        const result = await model.updateEmployee(id,name, active, departmentID);
        
        responseHelper(res, result);

    } catch (error) {
        next(error);
    }
}

module.exports = updateEmployee;