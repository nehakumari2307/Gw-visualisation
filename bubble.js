(function () {
    var width = 1500;
    height = 1500;

    var svg = d3.select("#chart").append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")

    var radiusScale = d3.scaleSqrt().domain([1, 100]).range([10, 80])


    var simulation = d3.forceSimulation()
        .force("x", d3.forceX(width / 2).strength(0.05))
        .force("y", d3.forceY(height / 2).strength(0.05))
        .force("collide", d3.forceCollide(function (d) {
            return radiusScale(d.age) + 1;
        }))


    d3.queue()
        .defer(d3.csv, "test.csv")
        .await(ready)

    function ready(error, datapoints) {

        var circles = svg.selectAll(".name")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "name")
            .attr("r", function (d) {
                return radiusScale(d.age)
            })
            .attr("fill", "lightblue")

        simulation.nodes(datapoints).on('tick', ticked)

        function ticked() {
            circles.attr("cx", function (d) {
                return d.x
            })
                .attr("cy", function (d) {
                    return d.y
                })
        }

    }

})();