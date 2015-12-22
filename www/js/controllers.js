angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MainCtrl', function($scope) {

})

.controller('FormCtrl', function($scope,$state,Data) {
  $scope.data = Data.all_data();
  $scope.gravarInfo = function(){
    $state.transitionTo("main");
    //$location.path("/main")
  };
})

.controller('LoginCtrl', function($scope,$state) {
  $scope.login = function(){
    $state.transitionTo("main");
    //$location.path("/tab/dash")
  }
  $scope.createAcc = function(){
    $state.transitionTo("form");
    //$location.path("/form")
  }
})

.controller('ChatsCtrl', function($scope, Data) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Data.all_chats();
  alert($scope.chats);
  $scope.remove = function(chat) {
    Data.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Data) {
  $scope.chat = Data.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
