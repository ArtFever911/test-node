const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');


const searchEmployeesByName = async (req, res, next) => {
    const { s } = req.query;
    try {
        const result = await model.searchEmployeesByName(s);
        responseHelper(res, result);
    } catch (error) {
        next(error);
    }
}


module.exports = searchEmployeesByName;