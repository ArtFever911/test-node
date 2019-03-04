const { Router: router } = require('express');
const {employee} = require('../controllers');
const {search,list,get,create,update,remove } = employee;


/**
 * Provide api for employee

 GET /api/v1/employees/ - List
 GET /api/v1/employees/:id - get single
 POST /api/v1/employees/create - Create
 @param
       name - {string}
       active - {string}
       department - {string}

 PUT /api/v1/employees/update:id - Update
 @param
       name - {string}
       active - {string}
       department - {string}

 DELETE /api/v1/employees/remove/:id - Remove


 **/

module.exports = () => {
  const api = router();

  api.get('/', search);
  api.get('/:id', get);
  api.get('/page/:page', list);
  api.post('/create/', create);
  api.put('/update/:id', update);
  api.delete('/remove/:id', remove);

  return api;
};
