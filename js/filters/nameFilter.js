angular.module("listaTelefonica").filter("name", function () {
  return function (input) {
    const listaDeNomes = input.split(" ");

    const listaFormatada = listaDeNomes.map(function (nome) {
      if (nome.length <= 2) {
        return nome.toLowerCase();
      }

      return `${nome.charAt(0).toUpperCase()}${nome.substring(1).toLowerCase()}`;
    });

    return listaFormatada.join(" ");
  };
});
