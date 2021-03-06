/**
 * @file
 * The draw function is called when the template first loads.
 */

import state from "./state";
import update from "./update";
import data from "./data";
import * as d3 from 'd3';
import { layout } from "../init";
import createChartLayout from "@flourish/chart-layout";
import createColors from "@flourish/colors"
import { extentMulti, getDots, getlines, getMoE} from '../parseData';


let chart, annoLabel, props, chart_layout, colors

export default function() {

//get the dimensions of the layout primary container
let width = layout.getPrimaryWidth()
let height = layout.getPrimaryHeight()

//Append chart content svg to the primary layout div
chart = d3.select("#fl-layout-primary")
	.append('svg')
	.attr('width', width)
	.attr('height', height)
//Add seperate g element to hold the annotation labels outside the chart_layout to avoid them being masked
annoLabel = chart.append('g')
	.attr('class', 'label')

//Create the default Flourish colour pallettes
colors = createColors(state.color)
//update the main layout (not chart_layout) with holding svg etc
props = { x: state.x, y: state.y, y2: state.y2, background: state.chart_bg };
chart_layout = createChartLayout(chart, props);
layout.update()

//call the update function
update();
//call the update function if the browser window gets resized
window.onresize = function() { update() };
}

export {layout, chart, annoLabel ,chart_layout, colors,};

