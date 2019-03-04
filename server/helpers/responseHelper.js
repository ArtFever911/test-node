const { NotFoundError } = require('rest-api-errors');

const STATUSES = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
};

const sendResponse = (res, data, status = 'SUCCESS') => {
    res
    .status(STATUSES[status])
    .json({
        status: STATUSES[status],
        data: data
    })
    .end();
}
module.exports = sendResponse;
