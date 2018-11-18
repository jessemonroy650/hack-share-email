//
//
//
var app = {
    version : '1.0.0',
    targetEvent : 'click',
    isCordova   : false,
    emailBlob   : {to:      'jesse650@gmail.com',
                   subject: 'Test of HTML email & files (img+text)',
                   body:    '<h1>Nice greetings from Leipzig</h1>',
                   isHtml:  true,
                   attachments: [
                       'file://img/apple.png',
                       'file://img/bellpepper.png',
                       'file://css/app.css'
                   ]
                  },

    //
    hook : function () {
        document.getElementById('shareButton').addEventListener(app.targetEvent, function () {
            console.log('#shareButton');
            document.getElementById('test').innerHTML       = '#shareButton';
            document.getElementById('mailStatus').innerHTML = 'Getting email app ...';
            // use a short timeout, otherwise text does not display
            setTimeout(shareEmail.sendEmail, 200);
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
        shareEmail.init('mailStatus', app.emailBlob);
    },
    //
    onDeviceReady : function () {
        document.getElementById('appIcon').src    = 'img/apple.png';
        document.getElementById('test').innerHTML = 'app.onDeviceReady';

        app.targetEvent                           = 'touchend';
        app.isCordova                             = (typeof window.cordova !== "undefined");
        //shareEmail.init('mailStatus');
        //
        cordova.plugins.email.isAvailable(function (isAvailable) {
            document.getElementById('mailPlugin').innerHTML = shareEmail.isEmailAvailable = isAvailable;
        });
    }
};
