angular.module("listaTelefonica").filter("ellipsis", function () {
  return function (input, size) {
    if (input.length > size) {
      return `${input.substring(0, size)}...`;
    } else {
      return input;
    }
  };
});
