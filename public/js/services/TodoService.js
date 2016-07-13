

(function(){
  angular.module('ngtodos')
          .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    var baseUrl = 'https://quiet-refuge-27140.herokuapp.com/';
    var o = {
      create: createTodo, //function
      readAll: getAll, //function
      update: updateTodo, //function
      delete: deleteTodo, //function
      todos: [] //data
    };
    return o;

    function createTodo(desc){
      var info = {
        description: desc
      };
      return $http.post(baseUrl+'todos', info)
                  .then(function(response){
                    getAll();
                  });
    }
    function getAll(){
      return $http.get(baseUrl + 'todos')
                  .then(function(response){
                    o.todos = response.data;
                  });
    }

    function updateTodo(id, newTodo){
      return $http.put(baseUrl+'todos/'+id, newTodo)
                  .then(function(response){
                    getAll();
                  });
    }
    function deleteTodo(id){
      return $http.delete(baseUrl+'todos/'+id)
                  .then(function(response){
                    getAll();
                  })
    }
  }
})()
