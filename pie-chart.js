// javascript
let data = [
    {"platform": "Android", "percentage": 40.11},
    {"platform": "Windows", "percentage": 36.69},
    {"platform": "iOS", "percentage": 13.06}
];

let pw = 500, ph = 300, radius =  Math.min(pw, ph) / 2;
let pc = d3.select('#pc')
    .attr("width", pw)
    .attr("height", ph);

//Create group element to hold pie chart
let g = pc.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")") ;

let color = d3.scaleOrdinal(d3.schemeCategory10);

let pie = d3.pie().value(function(d) {
     return d.percentage;
});

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

let arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) { return color(d.data.percentage); });

let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

arc.append("text")
    .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.platform+":"+d.data.percentage+"%"; });
