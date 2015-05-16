MEPH.define('Touch.menu.TouchMenuProvider', {
    requires: ['MEPH.util.Observable',
                'MEPH.Constants',
                'Touch.menu.template.MenuTemplate'],
    mixins: {
        injectable: 'MEPH.mixins.Injections'
    },
    injections: ['userService'],
    properties: {
        appMenu: null
    },
    initialize: function () {
        var me = this;
        MEPH.subscribe(Touch.constant.Constants.ConnectionLogIn, me.onloggedIn.bind(me));
        // MEPH.subscribe(Touch.constant.Constants.LoggedIn, me.onloggedIn.bind(me));
        me.mixins.injectable.init.apply(me);
        me.when.injected.then(function () {
          
        })
    },
    onloggedIn: function () {
        var me = this;
        me.loggedIn = true;
        if (me.loadMenu) {
            me.loadMenu();
        }
    },
    getTemplate: function (data) {
        var me = this;
        if (me.ownsData(data)) {
            return 'Touch.menu.template.MenuTemplate';
        }
    },
    getItems: function (data, toplevel) {
        var me = this;
        var res = [{
            connectionmenu: true,
            viewId: 'main',
            name: 'Contacts',
            path: 'main/contact'
        }, {
            connectionmenu: true,
            viewId: 'BUILD_MANAGER',
            name: 'Build Manager',
            path: 'build'
        }]
        if (!me.loggedIn) {
            //res.push({
            //    connectionmenu: true,
            //    name: 'Login',
            //    viewId: 'FirstTimePage',
            //    path: 'login'
            //});
        }
        else {
           
        }
        return res;
    },
    ownsData: function (data) {
        var me = this;
        return data.connectionmenu === true;
    },
    /**
     * Handles an item clicked event.
     * @param {Object} data
     * @param {Boolean} getparentdata, If true, the parents data should be retrieve. If no data exists,
     * then return false;
     */
    itemClicked: function (data, getparentdata) {
        var me = this;

        if (data.viewId) {
            MEPH.publish(MEPH.Constants.OPEN_ACTIVITY, { viewId: data.viewId, path: data.path });
            if (me.appMenu) {
                return me.appMenu.close().then(function () { return true; });
            }
            return true;
        }
        return true;
    }
});