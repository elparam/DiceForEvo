var PersonController = function ($scope, $routeParams) {
    $scope.personForm = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        creationFailed: false
    };

    $scope.create = function () {
        var result = CreatePersonFactory($scope.personForm.firstName, $scope.personForm.lastName, $scope.personForm.emailAddress);
        result.then(function (result) {
            if (result.success) {
                $location.path('/diceResult');
            } else {
                $scope.personForm.creationFailed = false;
            }
        });
    };
}

PersonController.$inject = ['$scope', '$routeParams', '$location', 'CreatePersonFactory'];