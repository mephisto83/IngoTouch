MEPH.define('Touch.session.SessionManager', {
    extend: 'MEPH.session.SessionManager',
    requires: ['MEPH.Constants'],
    injections: [],
    initialize: function () {
        var me = this;
        me.great();

        MEPH.subscribe(Touch.constant.Constants.ConnectionLogIn, function (type, res) {
            
        });
        MEPH.subscribe(MEPH.Constants.ProviderStatusChange, function (type, res) {
            if (res && res.provider && res.online) {
                
            }
        });
        //
        MEPH.subscribe(Touch.constant.Constants.LoggedIn, function (type, res) {
           
        });

        //MEPH.subscribe(Touch.constant.Constants.ConnectionLogIn, me.loadContactsAndMerge.bind(me));
    }
});