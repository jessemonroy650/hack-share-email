//
//
//
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova   : false,

    hook : function () {
        document.getElementById('shareButton').addEventListener(app.targetEvent, function () {
            console.log('#shareButton');
            document.getElementById('test').innerHTML = '#shareButton';
        });
    },
    //
    onDOMContentLoaded : function () {
        //alert("onDOMContentLoaded");
        document.getElementById('appIcon').src    = 'img/bellpepper.png';
        document.getElementById('test').innerHTML = 'app.onDOMContentLoaded';
        //
        app.targetEvent = 'click';
        app.isCordova   = (typeof window.cordova !== "undefined");
        //
        app.hook();
    },
    //
    onDeviceReady : function () {
        document.getElementById('appIcon').src    = 'img/apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';

        app.targetEvent = 'touchend';
        app.isCordova   = (typeof window.cordova !== "undefined");
        //
        email.isAvailable(function (isAvailable) {
            document.getElementById('mailPlugin').innerHTML = isAvailable;
        });
    }
};
