//
//
//
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova   : false,
    isEmailAvailable : false,


    sendEmail : function () {
        if (app.isEmailAvailable) {
            cordova.plugins.email.open({
                to:      'jesse650@gmail.com',
                subject: 'Test of HTML email & files (img+text)',
                body:    '<h1>Nice greetings from Leipzig</h1>',
                isHtml:  true,
                attachments: [
                    'file://img/apple.png',
                    'file://img/bellpepper.png',
                    'file://css/app.css'
                ]
            });
        } else {
            console.log('No email available.');
            document.getElementById('test').innerHTML = 'No email available.';
        }
    },
    //
    hook : function () {
        document.getElementById('shareButton').addEventListener(app.targetEvent, function () {
            console.log('#shareButton');
            document.getElementById('test').innerHTML = '#shareButton';
            app.sendEmail();
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
        cordova.plugins.email.isAvailable(function (isAvailable) {
            document.getElementById('mailPlugin').innerHTML = app.isEmailAvailable = isAvailable;
        });
    }
};
