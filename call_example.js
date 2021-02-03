////////////////////////////////////////////////////////////////
//
// Modifying l05.js to use .call()
//
// Author: Joshua Levine
// Date: Feb. 3, 2021
//
////////////////////////////////////////////////////////////////


// Data arrays
let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray2 = [29,23,19,17,13,11,7,5,3,2];
let dataArray3 = [2,3,5,7,11];

// Add and initialize the svg element
let svg = d3.select("#div1")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)

// Data join for rects + dataArray1 using .call()
svg.selectAll('rect')
  .data(dataArray1)
  .enter()
  .append("rect")
  .call(update) //accepts a function that passes the current selection


// By using .call() we can package up all of the attribute setting
function update(selection) {
  selection
    .attr("width", function() {
      return 20;
    })
    .attr("x", function(d,i) {
       return i*25;
    })
    .attr("height", function(datum) {
       return datum*10; 
    })
    .attr("y", computeYValue) //value functions need not be anonymous
    .attr("fill", d3.rgb(255,0,0));
}

// Helper function for y attribute
function computeYValue(d) {
  return 400 - d*10;
}

