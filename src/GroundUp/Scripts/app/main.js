angular.module('myapp', [], function ($provide, $httpProvider) {
    $provide.factory('myHttpInterceptor', function ($q) {
        return function (promise) {
            // Safe JSON
            /*var safeJson = function (textValue) {
                var unwrapped = textValue.substring(2).substring(0, temp.length - 2);
                unwrapped = $.trim(unwrapped);
                if (unwrapped.length === 0) {
                    return null;
                } else {
                    return JSON.parse(unwrapped);
                }
            };*/

            return promise.then(
               function (response) {
                   //response.data = safeJson(response.data);
                   return response;
               }, function (response) {
                   //response.data = safeJson(response.data);
                   return $q.reject(response.data);
               });
        }
    });
    $httpProvider.responseInterceptors.push('myHttpInterceptor');
})
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/:controller', { templateUrl: '/' + $routeParams.controller, controller: HomeController }).
        when('/:controller/:action', { templateUrl: '/' + $routeParams.controller + "/" + $routeParams.action, controller: HomeController }).
        when('/:controller/:action/:id', { templateUrl: '/' + $routeParams.controller + "/" + $routeParams.action + "/" + $routeParams.id, controller: HomeController }).
        /*when('/Home', { templateUrl: '/Home', controller: HomeController }).
        when('/Home/About', { templateUrl: '/Home/About', controller: HomeController }).
        when('/Home/Contact', { templateUrl: '/Home/Contact', controller: HomeController }).*/
        otherwise({ redirectTo: '/Home' });
}]);