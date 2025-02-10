app.controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
  $scope.app = "Lista Telefônica";

  // Comunicação com o back-end
  // Get
  const carregarContatos = function () {
    contatosAPI.getContatos().then(function (data) {
      $scope.contatos = data.data;
    });
  };

  const carregarOperadoras = function () {
    operadorasAPI.getOperadoras().then(function (data) {
      $scope.operadoras = data.data;
    });
  };

  carregarContatos();
  carregarOperadoras();
  // Get

  // Post
  $scope.adicionarContato = function (contato) {
    contatosAPI.saveContato(contato).then(function () {
      delete $scope.contato;

      $scope.contatoForm.$setPristine();

      carregarContatos();
    });
  };
  // Post

  //Delete
  $scope.excluirContatos = function (contatos) {
    for (let i = 0; i < contatos.length; i++) {
      const contato = contatos[i];

      if (contato.selecionado) {
        contatosAPI.deleteContato(contato.id).then(function () {
          carregarContatos();
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
