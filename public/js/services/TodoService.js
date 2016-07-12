

(function(){
  angular.module('ngtodos')
          .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    var o = {
      create: createTodo, //function
      readAll: getAll, //function
      update: updateTodo, //function
      delete: deleteTodo, //function
      todos: [] //data
    };
    return o;

    function createTodo(){}
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos')
                  .then(function(response){
                    o.todos = response.data;
                  });
    }
    function updateTodo(){}
    function deleteTodo(){}
  }
})()
