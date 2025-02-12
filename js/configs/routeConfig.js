angular.module("listaTelefonica").config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "../../view/contacts.html",
    controller: "listaTelefonicaCtrl",
    resolve: {
      contatos: function (contatosAPI) {
        return contatosAPI.getContatos();
      },
    },
  });

  $routeProvider.when("/addContato", {
    templateUrl: "../../view/addContact.html",
    controller: "addContactCtrl",
    resolve: {
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      },
    },
  });

  $routeProvider.when("/error", {
    templateUrl: "../../view/alert.html",
  });

  $routeProvider.otherwise({
    redirectTo: "/contatos",
  });
});
