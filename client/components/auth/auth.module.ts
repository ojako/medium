'use strict';

angular.module('mediumApp.auth', [
  'mediumApp.constants',
  'mediumApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
