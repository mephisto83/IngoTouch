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
        'MEPH.button.Button',
        'MEPH.input.Range',
        'MEPH.list.View',
        'Touch.constant.Constants'],
    properties: {
        height: 400,
        width: 500,
        strokeWidth: null,
        lineWidth: null,
        miterLimit: null,
        shadowBlur: null,
        shadowColor: null,
        color: null
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
            me.strokeWidth = 10;
            me.lineWidth = 10;
            me.miterLimit = 0;
            me.shadowBlur = 10;
            me.shadowColor = '#f131f1';
            me.color = '#f12123';
            MEPH.util.Style.zIndex(me.panel.body, 100000);
            me.onClickOutSideOf([me.panel.body, me.menu.body], me.onClickOutside.bind(me));
        }, 1000);
    },
    openMenu: function () {
        var me = this;

        MEPH.util.Style.show(me.menu.body);
        var position = MEPH.util.Dom.getRelativePosition(me.panel.body, me.panel.body.parentNode);
        var size = MEPH.util.Style.size(me.panel.body);
        position.x += size.width;
        MEPH.util.Style.setPos(me.menu.body, position);
    },
    clear: function () {
        var me = this;

        me.panel.surface.clear();
    },
    dropImage: function () {
        var me = this;
        var image = me.panel.surface.getImage();
        if (image) {
            var imageEl = document.createElement('img');
            MEPH.util.Style.absolute(imageEl);
            me.$window.document.body.appendChild(imageEl);
            MEPH.util.Style.setPos(imageEl, MEPH.util.Dom.getPosition(me.panel.body.querySelector('canvas')));
            imageEl.src = image;
            MEPH.util.Style.ignoreMouse(imageEl);
        }
    },
    onClickOutside: function () {
        var me = this;
        MEPH.util.Style.hide(me.menu.body);
    }
});