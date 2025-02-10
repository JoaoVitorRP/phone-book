angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
  const _getContatos = function () {
    return $http.get(`${config.baseURL}/contacts`);
  };

  const _saveContato = function (contato) {
    return $http.post(`${config.baseURL}/contacts`, contato);
  };

  const _deleteContato = function (id) {
    return $http.delete(`${config.baseURL}/contacts/${id}`);
  };

  return {
    getContatos: _getContatos,
    saveContato: _saveContato,
    deleteContato: _deleteContato,
  };
});
