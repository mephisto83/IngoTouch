(function () {
    var views = {
        "views": [
            {
                "viewId": "touchhome",
                "view": "Touch.main.view.Main",
                "singleton": true,
                "namespace": "Touch",
                "path": "/touch"
            },
            {
                "viewId": "BUILD_MANAGER",
                "view": "MEPH.build.view.BuildManager",
                "path": "/build/manager"
            }
        ]
    }

    /**
     * @class MEPH.mobile.providers.viewprovider.ViewProvider
     * Provides view definitions.
     **/
    MEPH.define('Touch.provider.ViewProvider', {
        extend: 'MEPH.mobile.providers.viewprovider.ViewProvider',
        /**
         * Loads the view configuration from the server.
         **/
        load: function (configuration) {
            var me = this,
                resource;

            configuration = configuration || me.configuration;
            if (configuration) {
                resource = configuration.viewsResource;
                return Promise.resolve().then(function () {
                    return Promise.resolve().then(function (response) {
                        var json = views;
                        me.viewlibrary = json;
                        me.libraryRoot = configuration.root;
                        return response;
                    })['catch'](function (e) {
                        MEPH.Log('There was a problem loading the configuration');
                        for (var i in e) {
                            MEPH.Log('i ' + i);
                            MEPH.Log('e ' + e[i]);
                        }
                        return Promise.reject(e);
                    });
                });
            }
            else {
                return Promise.resolve().then(function () {
                    throw 'no configuration in ViewProvider';
                });
            }
        }
    });
})();