const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');

const removeEmployee = async (res, req, next) => {
    const { id } = res.params;
    try {
        const result = await model.deleteEmployee(+id);
        if(result.affectedRows > 0) {
            responseHelper(req, result);
        }else{
            responseHelper(req, result, 'NOT_FOUND');
        }
        
    } catch (error) {
        next(error);
    }
}

module.exports = removeEmployee;