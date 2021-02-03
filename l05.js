////////////////////////////////////////////////////////////////
//
// This javascript example shows a simple d3 data join
//
// Author: Joshua Levine
// Date: Feb. 3, 2021
//
////////////////////////////////////////////////////////////////


// Data arrays
let dataArray1 = [2,3,5,7,11,13,17,19,23,29];

// Add the svg element
let svg = d3.select("#div1").append("svg")

// Initialize width/height
svg.attr("width", 400)
  .attr("height", 400)

// Data Join on dataArray1 and setting attributes
svg.selectAll("rect")
  .data(dataArray1)
  .enter()
  .append("rect")
  .attr("x", (x,i) => i*25)
  .attr("y", function(d) { return 400 - d*10; })
  .attr("width", 20)
  .attr("height", function(d) { return d*10; } )
  .attr("fill", d3.rgb(255,0,0));

