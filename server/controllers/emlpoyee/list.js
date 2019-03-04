const model = require('../../models/employee');
const responseHelper = require('../../helpers/responseHelper');

const listEmployees = async (req, res, next) => {
    try {
        let { page} = req.params;
        let { limit} = req.query;
        page = page ? page : 1;
        limit = limit ? limit : 5;
        const maxResults = await model.getAllEmployeesCount();
        const maxResultsCount = maxResults[0]['count(*)'];
        const maxPage = Math.ceil(maxResultsCount / limit)
        const result = await model.getManyEmployees(page, limit);
        const finalResult = {
            maxPage: maxPage,
            page: page,
            listing: result
        };
        responseHelper(res, finalResult);
    } catch (error) {
        next(error);
    }
}

module.exports = listEmployees;