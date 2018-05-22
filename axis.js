//Axis API
d3.axisTop()
d3.axisRight()
d3.axisLeft()
d3.axisBottom()

let axisData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let svgw = 500, svgh = 300;

let svg3 = d3.select('.axis')
             .attr('width', svgw)
             .attr('height', svgh);

let xxScale = d3.scaleLinear()
               .domain([0, d3.max(axisData)])
               .range([0, svgw]);

let yyScale = d3.scaleLinear()
               .domain([0, d3.max(axisData)])
               .range([svgh, 0]);

let x_axis = d3.axisBottom()
               .scale(xxScale);
let y_axis = d3.axisLeft()
               .scale(yyScale);

svg3.append('g')
    .attr('transform', 'translate(50, 10)')
    .call(y_axis);

let xAxisTranslate = svgh - 20;

svg3.append('g')
    .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
    .call(x_axis);
