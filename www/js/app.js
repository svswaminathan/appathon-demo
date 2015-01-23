// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
 
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    // controller: 'AppCtrl'
  })

  .state('app.landingpage', {
    url: "/landingpage",
    views: {
      'menuContent': {
        templateUrl: "templates/landingpage.html"
      }
    }
  })
  .state('app.timezone', {
    url: "/timezone",
    views: {
      'menuContent': {
        templateUrl: "templates/timezone.html",
        controller: 'TimeZoneCtrl'

      }
    }
  })

  .state('app.weather', {
    url: "/weather",
    views: {
      'menuContent': {
        templateUrl: "templates/weather.html",
        controller: 'WeatherCtrl'
      }
    }
  })

  .state('app.helpdesk', {
    url: "/helpdesk",
    views: {
      'menuContent': {
        templateUrl: "templates/helpdesk.html",
        controller: 'HelpDeskCtrl'
      }
    }
  })
    .state('app.adlookup', {
      url: "/adlookup",
      views: {
        'menuContent': {
          templateUrl: "templates/adlookup.html",
          controller: 'AdLookupCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landingpage');
});
