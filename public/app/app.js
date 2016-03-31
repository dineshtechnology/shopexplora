var app = angular.module('app', ['ngResource', 'ngRoute']);


app.config(function($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/landingpage.html'
        })
        .when('/items/:category', {
            templateUrl: '/partials/main/items.html?category=men',
            controller: 'itemCtrl'
        })
        .when('/cart/shoppingcart', {
            templateUrl: '/partials/main/shoppingcart.html',
            controller: 'itemCtrl'
        })
        .when('/checkout/shipping', {
            templateUrl: '/partials/main/shippingDetails.html',
            controller: 'itemCtrl'
        })
        .when('/checkout/creditcard', {
            templateUrl: '/partials/main/payment.html',
            controller: 'itemCtrl'
        })
         .when('/checkout/creditcard', {
            templateUrl: '/partials/main/payment.html',
            controller: 'itemCtrl'
        })
         .when('/checkout/confirmOrder', {
            templateUrl: '/partials/main/confirmation.html',
            controller: 'itemCtrl'
        })
        .when('/account/myaccount', {
            templateUrl: '/partials/account/account.html',
            controller: 'materialmainCtrl'
        })
        .when('/account/viewcart', {
            templateUrl: '/partials/account/viewcart.html',
            controller: 'materialmainCtrl'
        })
        .when('/account/checkout', {
            templateUrl: '/partials/account/checkout.html',
            controller: 'materialmainCtrl'
        })
        .when('/account/wishlist', {
            templateUrl: '/partials/account/wishlist.html',
            controller: 'materialmainCtrl'
        })
        .when('/account/history', {
            templateUrl: '/partials/account/orderhistory.html',
            controller: 'materialmainCtrl'
        })
        .when('/account/profile', {
            templateUrl: '/partials/account/editprofile.html',
            controller: 'materialmainCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/register.html',
            controller: 'mvSignupCtrl'
        })
        .when('/aboutus', {
            templateUrl: '/partials/main/aboutus.html'
        })
         .when('/contactus', {
            templateUrl: '/partials/main/contactus.html',
            controller: 'itemCtrl'
        })
        .when('/login', {
            templateUrl: '/partials/account/login.html',
            controller: 'authController'
        })
}).run(function($rootScope) {
    $rootScope.gbasket = [];
     $rootScope.$on('$locationChangeStart', function() {
            $rootScope.previousPage = location.pathname;
            console.log($rootScope.previousPage);
    });
});