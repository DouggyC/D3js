// Create SVG with D3

let shapeWidth = 600, shapeHeight = 500;
let svgCanvas = d3.select('#shapes')
      .attr('width', shapeWidth)
      .attr('height', shapeHeight)
      .attr('class', 'svg-container');

let line = svgCanvas.append('line')
      .attr('x1', 100)
      .attr('x2', 500)
      .attr('y1', 50)
      .attr('y2', 50)
      .attr('stroke', 'red')
      .attr('stroke-width', '5');

let rect = svgCanvas.append('rect')
      .attr('x', 100)
      .attr('y', 100)
      .attr('width', 200)
      .attr('height', 100)
      .attr('fill', 'salmon');

let circle = svgCanvas.append('circle')
      // center position and radius
      .attr('cx', 200)
      .attr('cy', 300)
      .attr('r', 80)
      .attr('fill', '#7ce8d5');
