const { APIError, InternalServerError } = require('rest-api-errors');
const { STATUS_CODES } = require('http');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
    const error = (err.status === 401 ||
        err instanceof APIError) ? err : new InternalServerError();

    if (['UserExistsError', 'ValidationError'].includes(err.name)) {
        return res.status(405).json(err);
    }

    if (process.env.NODE_ENV !== 'production') {
        console.log(`API error ${err}`);
    }

    logger.info('API error', { error: err });

    return res
        .status(error.status || 500)
        .json({
            code: error.code || 500,
            message: error.message || STATUS_CODES[error.status],
        });
};

module.exports = { errorHandler };