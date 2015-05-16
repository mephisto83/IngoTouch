/**
* @class Connection.application.Application
* Represents functionality for a mobile application.
*/
MEPH.define('Touch.application.Application', {
    extend: 'MEPH.mobile.Application',
    requires: ['Touch.application.container.ApplicationContainer'],
    statics: {
        mobileApplication: function (config) {
            var application = new Touch.application.Application(config);
            return application;
        }
    },
    properties: {
        applicationLogoCls: 'connection-application-logo',
        mobileApplicationContainer: 'touchapplication',
    },
    //createMobileAppContainerDom: function () {
    //    var dom = document.createElement('mobileApplicationContainer'),
    //        me = this;;
    //    dom.setAttribute(MEPH.dataObjectReferenceAttribute, '"ct$": "' + me.controllerType + '"');
    //    return dom;
    //}
}).then(function () {
    MEPH.App = Touch.application.Application;
})