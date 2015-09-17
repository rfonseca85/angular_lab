var myApp = angular.module('myApp', ['LeagueService']);
myApp.controller('lolCtrl', function ($scope, League) {


    $scope.imgUrl = League.getImageUrl();

    League.getChampions('br', function(response){
        console.log(response);
        $scope.champions = response;
    });

    $scope.championDetail = function(champ){

      console.log(champ.key);
    };

    
    // angular.forEach(values, function(value, key) {
    //   this.push(key + ': ' + value);
    // });

});










// var app = angular.module('myApp', []);

// app.controller('lolCtrl', ['$scope', 'dataFactory', function ($scope, dataFactory){

//     $scope.customers = [];
    
//     dataFactory.getCustomers()
//     .success(function (custs) {
//         $scope.customers = custs;
    
//     });




// }]);

// app.factory('dataFactory', ['$http', function($http) {

//     var dataFactory = {};

//     dataFactory.getCustomers = function () {
//         return [
       
//           { name: 'AngularJS Directives', completed: true, note: 'add notes...' },
//           { name: 'Data binding', completed: true, note: 'add notes...' },
//           { name: '$scope', completed: true, note: 'add notes...' },
//           { name: 'Controllers and Modules', completed: true, note: 'add notes...' },
//           { name: 'Templates and routes', completed: true, note: 'add notes...' },
//           { name: 'Filters and Services', completed: false, note: 'add notes...' },
//           { name: 'Get started with Node/ExpressJS', completed: false, note: 'add notes...' },
//           { name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
//           { name: 'Be awesome!', completed: false, note: 'add notes...' },
          
//           ];

//     };

//     return dataFactory;
// }]);


/*
<html ng-app="nameApp">
  <head>
    <meta charset="utf-8">
    <title>Angular.js Example</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min.js"></script>
    <script>
      var nameApp = angular.module('nameApp', []);
      nameApp.controller('NameCtrl', function ($scope){
        $scope.names = ['Larry', 'Curly', 'Moe'];
        $scope.addName = function() {
          $scope.names.push($scope.enteredName);
          $scope.enteredName = '';
        };
        $scope.removeName = function(name) {
          var i = $scope.names.indexOf(name);
          $scope.names.splice(i, 1);
        };
      });
    </script>
  </head>
  <body ng-controller="NameCtrl">
    <ul>
      <li ng-repeat="name in names">{{name}}
        <a href="" ng-click="removeName(name)">remove</a>
      </li>
    </ul>
    <form ng-submit="addName()">
      <input type="text" ng-model="enteredName">
      <input type="submit" value="add">
    </form>
  </body>
</html>


angular.module('app', ['ngRoute'])

  .factory('Todos', function(){
    return [
      { name: 'AngularJS Directives', completed: true, note: 'add notes...' },
      { name: 'Data binding', completed: true, note: 'add notes...' },
      { name: '$scope', completed: true, note: 'add notes...' },
      { name: 'Controllers and Modules', completed: true, note: 'add notes...' },
      { name: 'Templates and routes', completed: true, note: 'add notes...' },
      { name: 'Filters and Services', completed: false, note: 'add notes...' },
      { name: 'Get started with Node/ExpressJS', completed: false, note: 'add notes...' },
      { name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
      { name: 'Be awesome!', completed: false, note: 'add notes...' },
    ];
  })

  .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
    $scope.todos = Todos;
  }])
  
  .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
    $scope.todo = Todos[$routeParams.id];
  }])
  
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/todos.html',
        controller: 'TodoController'
      })
    
      .when('/:id', {
        templateUrl: '/todoDetails.html',
        controller: 'TodoDetailCtrl'
     });
  }]);

  */