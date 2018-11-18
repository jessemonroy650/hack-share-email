//
//
//
var shareEmail = {
    version : '0.8.0',
    isEmailAvailable : false,
    messageSpan : '',

    init : function (messageSpan) {
        shareEmail.messageSpan = messageSpan;
    },
    //
    emailDismissed : function (x) {
        document.getElementById(shareEmail.messageSpan).innerHTML = 'email dismissed:' + x;
    },
    //
    sendEmail : function () {
        if (shareEmail.isEmailAvailable) {
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
            }, shareEmail.emailDismissed);
        } else {
            console.log('No email available.');
            document.getElementById(shareEmail.messageSpan).innerHTML = 'No email available.';
        }
    },



}