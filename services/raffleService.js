angular
.module('app.services', [])
.factory('Raffle', function ($http) {
    return {
        get: function () {
            console.log("inside function");
            return $http.get('twitter.json');
        }
    };
});