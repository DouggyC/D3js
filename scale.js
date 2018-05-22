// Scale dataset

let dataset = [1,2,3,4,5];

let svg_Width = 500, svg_Height = 300, bar_Padding = 5;
let bar_Width = (svg_Width / dataset.length);

let u = d3.select('#scale')
            .attr('width', svg_Width)
            .attr('height', svg_Height);

let yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset)])
               .range([0, svg_Height]);

let bar_Chart = u.selectAll('rect')
                  .data(dataset)
                  .enter()
                  .append('rect')
                  .attr('fill', 'pink')
                  .attr('y', function(d) {
                    return svg_Height - yScale(d);
                  })
                  .attr('height', function(d) {
                    return yScale(d);
                  })
                  .attr('width', bar_Width - bar_Padding)
                  .attr('transform', function(d, i) {
                    let translate = [bar_Width * i, 0];
                    return 'translate('+ translate +')';
                  });

// axis
