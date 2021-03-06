angular.module('app').controller('ApplicationDataTaxIdCtrl', function($scope) {

    if (!$scope.application.taxId) {
        $scope.application.taxId = {};
    }

    $scope.taxIdPattern = /\d{11}/;

    $scope.isDataValid = function() {
        return $scope.application.taxId.image || $scope.application.taxId.value;
    };

});
