app.controller("addContactCtrl", function ($scope, contatosAPI, $location, operadoras, $rootScope) {
  $scope.app = "Lista Telefônica";

  // Comunicação com o back-end
  // Get
  $scope.operadoras = operadoras.data;
  // Get

  // Post
  $scope.adicionarContato = function (contato) {
    contatosAPI
      .saveContato(contato)
      .then(function () {
        delete $scope.contato;

        $scope.contatoForm.$setPristine();

        $location.path("/contatos");
      })
      .catch(function (data) {
        $rootScope.errorTitle = "Ocorreu um erro ao adicionar o contato!";
        $rootScope.errorCode = `Erro: ${data.data}, código: ${data.status}`;
      });
  };
  // Post
  // Comunicação com o back-end
});
