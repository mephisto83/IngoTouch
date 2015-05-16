/**
* @class Touch.application.container.ApplicationContainer
* Touch application container.
*/
MEPH.define('Touch.application.container.ApplicationContainer', {
    extend: 'MEPH.mobile.application.container.MobileApplicationContainer',
    templates: true,
    alias: 'touchapplication',
    requires: ['Touch.application.header.ApplicationHeader']

});