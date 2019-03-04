const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');

const getEmloyee = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await model.getOneEmployee(+id);
        responseHelper(res, result)
    } catch (error) {
        next(error);
    }
}

module.exports = getEmloyee;