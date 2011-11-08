// create the Application
Ext.regApplication(
    // configure it by passing an object to the constructor
    {
        // 'launch()' is called after the document finished loading
        launch: function() {
            // create the main panel
            new Ext.Panel(
                // configure it by passing an object to the constructor
                {
                    // use the available width and height
                    fullscreen: true,
                    // add the following list of components to the dock (default: top)
                    dockedItems: [
                        {
                            // create a Toolbar object, short form of 'new Ext.Toolbar()'
                            xtype: 'toolbar',
                            title: 'Docked Toolbar'
                        }
                    ],
                    // place items in rows, filling the whole width
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    // add the following items to the panel
                    items: [
                        {
                            // first row
                            xtype: 'panel',
                            // use 1/3 height
                            flex: 1,
                            style: 'background: #999',
                            // place items in columns, filling the whole height
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                { 
                                    // use 1/3 width
                                    flex: 1,
                                    style: 'background: #99b',
                                    html: '1-1'
                                },
                                { 
                                    flex: 1,
                                    style: 'background: #99d',
                                    html: '1-2'
                                },
                                { 
                                    flex: 1, 
                                    style: 'background: #99f',
                                    html: '1-3'
                                }
                            ]
                        },
                        {
                            // second row
                            xtype: 'panel',
                            flex: 1,
                            style: 'background: #999',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                { 
                                    flex: 1,
                                    style: 'background: #9b9',
                                    html: '2-1'
                                },
                                { 
                                    flex: 1,
                                    style: 'background: #9d9',
                                    html: '2-2'
                                },
                                { 
                                    flex: 1, 
                                    style: 'background: #9f9',
                                    html: '3-3'
                                }
                            ]
                        },
                        {
                            // third row is a three panel carousel
                            xtype    : 'carousel',
                            ui       : 'light',
                            direction: 'horizontal',
                            flex: 1,
                            style: 'background: #999',
                            items: [
                                {
                                    // first panel
                                    xtype: 'panel',
                                    style: 'background: #b99',
                                    layout: 'hbox',
                                    items: [
                                        // place dummy button on the left
                                        {
                                            xtype: 'button',
                                            // use built-in arroq icons
                                            iconCls: 'arrow_left',
                                            iconMask: true,
                                            ui: 'plain'
                                        },
                                        // takes all space in between
                                        { xtype: 'spacer', html: '1' },
                                        // place dummy button on the right
                                        {
                                            xtype: 'button',
                                            iconCls: 'arrow_right',
                                            iconMask: true,
                                            ui: 'plain'
                                        }
                                    ]
                                },
                                { 
                                    xtype: 'panel',
                                    style: 'background: #d99',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'button',
                                            iconCls: 'arrow_left',
                                            iconMask: true,
                                            ui: 'plain'
                                        },
                                        { xtype: 'spacer', html: '2' },
                                        {
                                            xtype: 'button',
                                            iconCls: 'arrow_right',
                                            iconMask: true,
                                            ui: 'plain'
                                        }
                                    ]
                                },
                                { 
                                    xtype: 'panel',
                                    style: 'background: #f99',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'button',
                                            iconCls: 'arrow_left',
                                            iconMask: true,
                                            ui: 'plain'
                                        },
                                        { xtype: 'spacer', html: '3' },
                                        {
                                            xtype: 'button',
                                            iconCls: 'arrow_right',
                                            iconMask: true,
                                            ui: 'plain'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            );
        }
    }
);
