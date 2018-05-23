d3.selectAll('li').style('color', 'red');

d3.select('li:nth-child(2)').style('color', 'blue')
  .html('This text change')
  .classed('big', true);


let numArr = [10, 20, 30, 40, 50, 8, 10, 12, 14, 16];

let name = 'Bind String';

let newLi = d3.select('.items').selectAll('.items li')
  .data(numArr)
  .text(function(d) {
    return 'Bound Number: ' + d;
});

newLi.enter().append('li')
  .text(function(d) {
    return 'New appended Li ' + d;
});

newLi.exit().remove();

d3.selectAll('.items li')
  .data(numArr)
  .style('font-size', function(d) {
    return d + 'px';
});

d3.select('.name').text(name);
