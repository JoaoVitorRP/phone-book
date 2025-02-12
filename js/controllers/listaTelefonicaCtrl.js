app.controller("listaTelefonicaCtrl", function ($scope, contatosAPI, contatos, $route) {
  $scope.app = "Lista Telefônica";

  // Comunicação com o back-end
  // Get
  $scope.contatos = contatos.data;
  // Get

  //Delete
  $scope.excluirContatos = function (contatosArr) {
    for (let i = 0; i < contatosArr.length; i++) {
      const contato = contatosArr[i];

      if (contato.selecionado) {
        contatosAPI
          .deleteContato(contato.id)
          .then(function () {
            $route.reload();
          })
          .catch(function (data) {
            $rootScope.errorTitle = "Ocorreu um erro ao excluir o contato!";
            $rootScope.errorCode = `Erro: ${data.data}, código: ${data.status}`;
          });
      }
    }
  };
  //Delete
  // Comunicação com o back-end

  // Funções Extras
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };

  $scope.ordernarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;

    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
  // Funções Extras
});
