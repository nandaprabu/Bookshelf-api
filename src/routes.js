const { addBookHandler, allBookHandler, getBookIdHandler, editBookHandler, deleteBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: allBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
