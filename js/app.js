//
//
//
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova   : false,
    //
    hook : function () {
        document.getElementById('shareButton').addEventListener(app.targetEvent, function () {
            console.log('#shareButton');
            document.getElementById('test').innerHTML       = '#shareButton';
            document.getElementById('mailStatus').innerHTML = 'Getting email app ...';
            
            shareEmail.sendEmail();
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
        shareEmail.init('mailStatus');
    },
    //
    onDeviceReady : function () {
        document.getElementById('appIcon').src    = 'img/apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';

        app.targetEvent = 'touchend';
        app.isCordova   = (typeof window.cordova !== "undefined");
        //shareEmail.init('mailStatus');
        //
        cordova.plugins.email.isAvailable(function (isAvailable) {
            document.getElementById('mailPlugin').innerHTML = shareEmail.isEmailAvailable = isAvailable;
        });
    }
};
