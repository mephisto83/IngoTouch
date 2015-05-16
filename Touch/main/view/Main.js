MEPH.define('Touch.main.view.Main', {
    alias: 'touch_main',
    templates: true,
    extend: 'MEPH.mobile.activity.container.Container',
    mixins: ['MEPH.mobile.mixins.Activity'],
    injections: [],
    requires: ['MEPH.input.Search',
        'MEPH.util.Observable',
        'MEPH.mobile.activity.view.ActivityView',
        'MEPH.pad.DrawingSurface',
        'MEPH.util.Draggable',
        'MEPH.panel.Panel',
        'MEPH.input.Color',
        'MEPH.input.Range',
        'MEPH.list.View',
        'Touch.constant.Constants'],
    properties: {
        height: 400,
        width: 500,
    },
    initialize: function () {
        var me = this;
        me.callParent.apply(me, arguments);
    },
    onLoaded: function () {
        var me = this;
        MEPH.util.Draggable.draggable(me.panel.body, me.panel.header);
        MEPH.util.Draggable.draggable(me.menu.body, me.menu.header);
        me.great();
        setTimeout(function () {
            me.height = 200;
            me.width = 400;
            MEPH.util.Style.zIndex(me.panel.body, 100000);
            me.onClickOutSideOf([me.panel.body, me.menu.body], me.onClickOutside.bind(me));
        }, 1000);
    },
    openMenu: function () {
        var me = this;

        MEPH.util.Style.show(me.menu.body);
        var position = MEPH.util.Dom.getRelativePosition(me.panel.body, me.panel.body.parentNode);
        MEPH.util.Style.setPos(me.menu.body, position);
    },
    onClickOutside: function () {
        var me = this;
        MEPH.util.Style.hide(me.menu.body);
    }
});