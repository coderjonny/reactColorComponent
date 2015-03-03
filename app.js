// Code goes here

 angular.module('fasterAngular', []).
  controller('mycontroller', ['$scope', function($scope){
      $scope.framework = 'ReactJs';
      $scope.data = [];
      // Fill the data map with random colors!
      function getRandomColor() {
          var letters = '0123456789ABCDEF'.split('');
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }

      $scope.refresh = function(){
          for(var i = 0; i < 2000; ++i) {
              $scope.data[i] = {};
              for(var j = 0; j < 10; ++j) {
                  $scope.data[i][j] = getRandomColor();
              }
          }
      }
      $scope.refresh()
  }])













  .directive('fastRepeat', function(){
      return{
          restrict: 'E',
          scope:{
              data: '='
          },
          link:function(scope, el, attrs){
              scope.$watchCollection('data', function(newValue, oldValue){
                  React.renderComponent(
                      MYLIST({data:newValue}),
                      el[0]
                  );
              })
          }
      }
  })

