/**
 * @file
 * The current state of template. You can make some or all of the properties
 * of the state object available to the user as settings in settings.js.
 */

export default {
	layout: {
		title: 'Title not yet added',
		subtitle: 'Suntitle not yet added',
		footer_note: "Source: Not yet added",
		background_color: '#fff1e5',
	},
	x: {title_mode: 'custom',
		tick_label_angle: 0,
		line_and_tick_color : '#ccc1b7',
		show_scale_settings: true,
		nice: false,
		axis_position: 'bottom',
	},
	y: {title_mode: 'custom',
		gridlines_visible: true,
		gridline_color: '#ccc1b7'},
	y2: {},
	color: {domain: ['US', 'UK'], range: ['#f3d4c2','e3c1a5'],},
	chart_bg: {},
    fixedHeight: false,
	height: 550,
	dateFormat: '%d/%m/%Y',
	tickFormat: null,
	dotSize: 2.5,
	dotOpacity: 0.2,
	polls:{smallSize: 1.1, largeSize: 1.25, smallOpacity: 1, largeOpacity: 1},
	averages:{smallStrokeWidth: 2, largeStrokeWidth: 3, smallOpacity: 1, largeOpacity: 1},
	moe:{opacityMob: 0.3, opacityDesk: 0.3},
	legend_container: {},
	legend_categorical: {swatch_width: 1.2, swatch_height: .3},
	displayValues: {},
	popup: {} // Add any properties to this object to override the default settings

};
