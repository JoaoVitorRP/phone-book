angular.module("listaTelefonica").directive("uiPhone", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      const _formattedPhone = function (phone) {
        phone = phone.replace(/[^0-9]+/g, "");

        if (phone.length > 0) {
          phone = `(${phone.substring(0)}`;
        }

        if (phone.length > 3) {
          phone = `${phone.substring(0, 3)}) ${phone.substring(3)}`;
        }

        if (phone.length > 10) {
          phone = `${phone.substring(0, 10)}-${phone.substring(10, 14)}`;
        }

        return phone;
      };

      element.bind("keyup", function () {
        ctrl.$setViewValue(_formattedPhone(ctrl.$viewValue));
        ctrl.$render();
      });
    },
  };
});
