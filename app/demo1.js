// Create an application module for our demo.
var app = angular.module( "Demo", [] );
// -------------------------------------------------- //
// -------------------------------------------------- //
// I control the root of the application.
app.controller("AppController", function( $scope, $interval ) {
    // Continuously broadcast an event down the scope tree.
    $interval(function handleInterval() {
        $scope.$broadcast( "ping" );
    }, 500);
});
// -------------------------------------------------- //
// -------------------------------------------------- //
// I control the event targets.
app.controller("EventController", function( $scope ) {
    // I keep track of the number of times we've handled a given event.
    $scope.eventCount = 0;
    // I keep track of whether or not this controller is currently listening
    // for the broadcast event.
    $scope.isWatchingEvent = false;
    // I am the deregistration method for the event handler. This is the
    // closest thing we have to a scope.$off() method.
    var unbindHandler = null;
    // When the controller loads, start listening for broadcast events.
    startWatchingEvent();
    // ---
    // PUBLIC METHODS
    // ---
    // I turn on / off event listening depending on the current state.
    $scope.toggleListener = function() {
        unbindHandler
            ? stopWatchingEvent()
            : startWatchingEvent()
        ;
    };
    // ---
    // PRIVATE METHODS
    // ---
    // I respond to the "ping" event on the scope.
    function handlePingEvent( event ) {
        $scope.eventCount++;
    }
    // I start watching for the "ping" event on the scope.
    function startWatchingEvent() {
        // When we bind the $on() event, the return value is the
        // deregistration method for the event handler. This is the way we
        // can handle unbind event handlers without destroying the scope.
        // --
        // NOTE: When a scope is $destroy()'d, it will automatically unbind
        // all of your event handlers.
        unbindHandler = $scope.$on( "ping", handlePingEvent );
        $scope.isWatchingEvent = true;
    }
    // I stop watching for the "ping" event on the scope.
    function stopWatchingEvent() {
        // Invoke the deregistration method in order to unbind the event
        // handler. Set to null so we know how to handle the "toggle" method.
        unbindHandler();
        unbindHandler = null;
        $scope.isWatchingEvent = false;
    }
});
