angular.module("listaTelefonica").directive("uiDate", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      const _formattedDate = function (date) {
        date = date.replace(/[^0-9]+/g, "");

        if (date.length > 2) {
          date = `${date.substring(0, 2)}/${date.substring(2, 4)}`;
        }

        return date;
      };

      element.bind("keyup", function () {
        ctrl.$setViewValue(_formattedDate(ctrl.$viewValue));
        ctrl.$render();
      });
    },
  };
});
