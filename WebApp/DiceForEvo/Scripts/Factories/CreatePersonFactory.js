var CreatePersonFactory = function ($http, $q) {
    return function (fistName, lastName, emailAddress) {

        var deferredObject = $q.defer();
        $http.post(
            '/Person/Create', {
                FistName: fistName,
                LastName: lastName,
                EmailAddress: emailAddress
            }
        ).
        success(function (data) {
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}

CreatePersonFactory.$inject = ['$http', '$q'];