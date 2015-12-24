angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MainCtrl', function($scope,$state) {
  $scope.verPedidos = function(){
    $state.transitionTo("pedidos");
    //$location.path("/main")
  };
  $scope.verSolicitacoes = function(){
    alert("Ainda é necessário implementar");
    //$state.transitionTo("main");
    //$location.path("/main")
  };
  $scope.verAtivos = function(){
    alert("Ainda é necessário implementar");
    //$state.transitionTo("main");
    //$location.path("/main")
  };
  $scope.clickBusiness = function(){
    $state.transitionTo("searchBusiness");
    //$location.path("/main")
  };
  $scope.clickDocuments = function(){
    alert("Ainda é necessário implementar");
    //$state.transitionTo("main");
    //$location.path("/main")
  };
  $scope.clickPerson = function(){
    alert("Ainda é necessário implementar");
    //$state.transitionTo("main");
    //$location.path("/main")
  };
  $scope.clickSocial = function(){
    alert("Ainda é necessário implementar");
    //$state.transitionTo("main");
    //$location.path("/main")
  };
})

.controller('SearchBusinessCtrl', function($scope,$state,Data) {
  $scope.businesslist = Data.all_busi();
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
    alert("Ativado modo demonstrativo");
    $state.transitionTo("main");
    //$location.path("/tab/dash")
  };
  $scope.createAcc = function(){
    $state.transitionTo("form");
    //$location.path("/form")
  };
})

.controller('PedidosMainCtrl', function($scope,$state,Data) {
  $scope.pedidos = Data.all_pedidos();
})

.controller('PedidosDetailsCtrl', function($scope,$state,$stateParams,Data) {
  $scope.pedido = Data.pedido($stateParams.pedidoId);
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
