angular.module("listaTelefonica").factory("operadorasAPI", function ($http, config) {
  const _getOperadoras = function () {
    return $http.get(`${config.baseURL}/operadoras`);
  };

  return {
    getOperadoras: _getOperadoras,
  };
});
