(function () {
    var width = 500;
    height = 500;

    // var bubble = d3.layout.pack().sort(null)
    //                 .size([width, height]);


    var svg = d3.select("#chart").append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")
        .attr("class", "bubble")

    var radiusScale = d3.scaleSqrt().domain([1, 500]).range([10, 50])
    var xRange = d3.scale.linear().range([1, 500]).domain([10, 50]);
    var yRange = d3.scale.linear().range([1, 500]).domain([10, 50]);


    var simulation = d3.forceSimulation()
        .force("x", d3.forceX(width / 2).strength(0.05))
        .force("y", d3.forceY(height / 2).strength(0.05))
        .force("collide", d3.forceCollide(function (d) {
            return radiusScale(d.popularity) + 1;
        }))


    d3.queue()
        .defer(d3.csv, "test.csv")
        .await(ready)

    function ready(error, datapoints) {

        var circles = svg.selectAll(".name")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "name")
            .attr("stroke", "black")
            .attr("stroke-width", "2")
            .attr("r", function (d) {
                return radiusScale(d.popularity)
            })
            .attr("fill", "lightblue")

        var texts = circles.selectAll(null)
            .data(datapoints)
            .enter()
            .append("text")
            .attr("class", "nodetext")
            .text(d => d.name)
            .attr("text-anchor", "middle")
            .attr("color", "black")
            .attr("font-size", 15)

        simulation.nodes(datapoints).on('tick', ticked)

        function ticked() {
            circles.attr("cx", function (d) {
                console.log("circle- " + d.x);
                return d.x
            });

            texts.attr("cx", function (d) {
                console.log("text- " + d.x);
                return d.x;
            });

            circles.attr("cy", function (d) {
                console.log("circle- " + d.y);
                return d.y
            });

            text.attr("cy", function (d) {
                console.log("text- " + d.y)
                return d.y;
            });
        }

    }

})();