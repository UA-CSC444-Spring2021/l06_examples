////////////////////////////////////////////////////////////////
//
// Revise l05.js using scales and also a group transform
//
// Author: Joshua Levine
// Date: Feb. 3, 2021
//
////////////////////////////////////////////////////////////////


// Data arrays
let dataArray1 = [2,3,5,7,11,13,17,19,23,29];

// svg attributes
let svgWidth = 400;
let svgHeight = 400;

// Add and initialize the svg element and a group containing the rects
let rectGroup = d3.select("#div1")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", `translate(0,${svgHeight}) scale(1,-1)`) //invert!

// Data join for rects + dataArray1 using .call()
rectGroup.selectAll('rect')
  .data(dataArray1)
  .enter()
  .append("rect")
  .call(update) //accepts a function that passes the current selection


//by using .call() we can package up all of the attribute setting
function update(selection) {
  // Create some scales for x position and height
  let xScale = d3.scaleLinear()
    .domain([0,dataArray1.length])
    .range([50,svgWidth-50])  //set a 50 pixel margin
  
  let hScale = d3.scaleLinear()
    .domain([0, d3.max(dataArray1)])
    .range([0, 300])

  // Update attributes
  selection
    .attr("x", (d,i) => xScale(i))
    .attr("y", 0)  //using the transform, we can avoid having to set y
    .attr("width", 20)
    .attr("height", d => hScale(d))
    .attr("fill", d3.rgb(255,0,0));
}




