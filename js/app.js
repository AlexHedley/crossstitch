'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngVis']).run(init);;

function init($rootScope, $location) {
    $rootScope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);
    // $locationProvider.html5mode({ enabled: true, requireBase: false });

    $routeProvider.when('/', {
        templateUrl: '/patterns.html',
        controller: 'patternsController'
    }).when('/todo', {
        templateUrl: '/todo.html',
        controller: 'todoController'
    }).when('/inprogress', {
        templateUrl: '/inprogress.html',
        controller: 'inprogressController'
    }).when('/mum', {
        templateUrl: '/mum.html',
        controller: 'mumController'
    }).when('/minis', {
        templateUrl: '/minis.html',
        controller: 'minisController'
    }).otherwise({
        redirectTo: "/"
    });

});

app.controller('patternsController', function ($scope, $http, $q, $filter, $location, $timeout, VisDataSet) {
    console.log('Patterns');

    $scope.buildVisualisation = () => {
        // See https://github.com/visjs/angular-visjs/blob/master/app.js

        $scope.logs = {};

        $scope.defaults = {
            orientation: ['top', 'bottom'],
            autoResize: [true, false],
            showCurrentTime: [true, false],
            showCustomTime: [true, false],
            showMajorLabels: [true, false],
            showMinorLabels: [true, false],
            align: ['left', 'center', 'right'],
            stack: [true, false],

            moveable: [true, false],
            zoomable: [true, false],
            selectable: [true, false],
            editable: [true, false]
        };

        var options = {
            align: 'center', // left | right (String)
            autoResize: true, // false (Boolean)
            editable: true,
            selectable: true,
            // start: null,
            // end: null,
            // height: null,
            // width: '100%',
            // margin: {
            //   axis: 20,
            //   item: 10
            // },
            // min: null,
            // max: null,
            // maxHeight: null,
            orientation: 'bottom',
            // padding: 5,
            showCurrentTime: true,
            showCustomTime: true,
            showMajorLabels: true,
            showMinorLabels: true
            // type: 'box', // dot | point
            // zoomMin: 1000,
            // zoomMax: 1000 * 60 * 60 * 24 * 30 * 12 * 10,
            // groupOrder: 'content'
        };

        $scope.mappedPatterns = $scope.patterns.map(function(pattern) {
            return {
                id: pattern.id,
                content: pattern.name,
                start: new Date(pattern.date)
            };
        });
        var items = VisDataSet($scope.mappedPatterns);

        $scope.data = {items: items};
        
        var orderedContent = 'content';
        var orderedSorting = function (a, b) {
            // option groupOrder can be a property name or a sort function
            // the sort function must compare two groups and return a value
            //     > 0 when a > b
            //     < 0 when a < b
            //       0 when a == b
            return a.value - b.value;
        };

        $scope.options = angular.extend(options, {
            groupOrder: orderedContent,
            editable: true
        })

        $scope.onSelect = function (items) {
            // debugger;
            alert('select');
        };

        $scope.onClick = function (props) {
            //debugger;
            alert('Click');
        };

        $scope.onDoubleClick = function (props) {
            // debugger;
            alert('DoubleClick');
        };

        $scope.rightClick = function (props) {
            alert('Right click!');
            props.event.preventDefault();
        };

        $scope.events = {
            rangechange: $scope.onRangeChange,
            rangechanged: $scope.onRangeChanged,
            onload: $scope.onLoaded,
            select: $scope.onSelect,
            click: $scope.onClick,
            doubleClick: $scope.onDoubleClick,
            contextmenu: $scope.rightClick
        };
    }

    $scope.patterns = [];

    $scope.init = function () {
        $scope.getData();
    }

    $scope.getData = () =>  {
        var file = 'data/patterns.json';

        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
            $scope.buildVisualisation()
        });
    };

    $scope.init();
});

app.controller("todoController", function ($scope, $http, $q, $filter, $location) {
    console.log('todo');
    $scope.patterns = [];

    $scope.init = function () {
        $scope.getData();
    }

    $scope.getData = () =>  {
        var file = 'data/todo.json';
        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
        });
    };

    $scope.init();
});

app.controller("inprogressController", function ($scope, $http, $q, $filter, $location) {
    console.log('in progress');
    $scope.patterns = [];

    $scope.init = function () {
        $scope.getData();
    }

    $scope.getData = () =>  {
        var file = 'data/inprogress.json';
        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
        });
    };

    $scope.init();
});

app.controller("mumController", function ($scope, $http, $q, $filter, $location) {
    console.log('mum');
    $scope.patterns = [];

    $scope.init = function () {
        $scope.getData();
    }

    $scope.getData = () =>  {
        var file = 'data/mum.json';

        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
        });
    };

    $scope.init();
});

app.controller("minisController", function ($scope, $http, $q, $filter, $location) {
    console.log('minis');
    $scope.patterns = [];

    $scope.init = function () {
        $scope.getData();
    }

    $scope.getData = () =>  {
        var file = 'data/minis.json';

        $http.get(file)
        .then(function(response) {
            $scope.patterns = response.data.patterns;
        });
    };

    $scope.init();
});