app.controller("listaTelefonicaCtrl", function ($scope, $http) {
  $scope.app = "Lista Telefônica";

  // Comunicação com o back-end
  // Get
  const carregarContatos = function () {
    $http.get("https://67a9e52965ab088ea7e4e052.mockapi.io/api/contacts").then(function (data) {
      $scope.contatos = data.data;
    });
  };

  const carregarOperadoras = function () {
    $http.get("https://67a9e52965ab088ea7e4e052.mockapi.io/api/operadoras").then(function (data) {
      $scope.operadoras = data.data;
    });
  };

  carregarContatos();
  carregarOperadoras();
  // Get

  // Post
  $scope.adicionarContato = function (contato) {
    $http.post("https://67a9e52965ab088ea7e4e052.mockapi.io/api/contacts", contato).then(function (data) {
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
        $http.delete(`https://67a9e52965ab088ea7e4e052.mockapi.io/api/contacts/${contato.id}`).then(function (data) {
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
