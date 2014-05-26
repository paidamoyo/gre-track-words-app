/* global app:true */
'use strict';

var app = angular.module('angularjsAppApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute'
  ])
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
