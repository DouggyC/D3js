// DOM Selection and manipulation
d3.select();
d3.selectAll();

d3
  .select('h1')
  .style('color', 'red')
  .attr('class', 'heading')
  .text('D3js Sandbox');

d3
  .select('body')
  .append('div')
  .text('First Paragraph');
d3
  .select('body')
  .append('div')
  .text('Second Paragraph');
d3
  .select('body')
  .append('div')
  .text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');

// Data loding and binding
var bdata = [1, 2, 3, 4, 5];

d3
  .select('body')
  .selectAll('p')
  .data(bdata)
  .enter() // takes each element and execute on each
  .append('p') // appends Paragraph for each data element
  .text('D3 is awesome!!')
  .text(d => d);


// Bar Chart
// javascript
var newData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / newData.length);


var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
   .data(newData)
   .enter()
   .append("rect")
   .attr('fill', 'red')
   .attr("y", function(d) {
        return svgHeight - d
   })
   .attr("height", function(d) {
       return d;
   })
   .attr("width", barWidth - barPadding)
   .attr("transform", function (d, i) {
       var translate = [barWidth * i, 0];
       return "translate("+ translate +")";
   });


// Creating labels
let text = svg.selectAll('text')
              .data(newData)
              .enter()
              .append('text')
              .text(function(d) {
                return d;
              })
              .attr('y', function(d, i) {
                return svgHeight - d - 2;
              })
              .attr('x', function(d, i) {
                return barWidth * i + 12.5;
              })
              .attr('fill', 'blue');


// Scales
