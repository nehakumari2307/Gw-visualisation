(function () {
    var width = 500;
    height = 500;

    let bubbles = null;
    let labels = null;
    //let nodes = [];

    var svg = d3.select("#chart").append("svg")
        .attr("height", height)
        .attr("width", width)
        .append("g")
        .attr("transform", "translate(0,0)")
        .attr("class", "bubble")

    function createNodes(rawData) {

        var radiusScale = d3.scaleSqrt().domain([1, 500]).range([10, 50])
        const myNodes = rawData.map(d => ({
            ...d,
            name: d.name,
            radius: radiusScale(+d.popularity),
            size: +d.popularity,
            x: Math.random() * 900,
            y: Math.random() * 800
        }))

        return myNodes;
    }

    var simulation = d3.forceSimulation()
        .force("x", d3.forceX(width / 2).strength(0.05))
        .force("y", d3.forceY(height / 2).strength(0.05))
        .force("collide", d3.forceCollide(function (d) {
            return d.radius + 1;
        }))


    d3.queue()
        .defer(d3.csv, "test.csv")
        .await(ready)

    function ready(error, datapoints) {

        nodes = createNodes(datapoints);

        // var circles = svg.selectAll(".name")
        //     .data(datapoints, d=> d.name)
        //     .enter().append("circle")
        //     .attr("class", "name")
        //     .attr("stroke", "black")
        //     .attr("stroke-width", "2")
        //     .attr("r", function (d) {
        //         return radiusScale(d.popularity)
        //     })
        //     .attr("fill", "lightblue")

        const elements = svg.selectAll(".name")
            .data(nodes, d => d.name)
            .enter()
            .append("g")

        bubbles = elements.append("circle")
            .classed('bubble', true)
            .attr("stroke", "black")
            .attr("stroke-width", "2")
            .attr("r", d => d.radius)
            .attr("fill", "lightblue")

        labels = elements
            .append("text")
            .attr("dy", ".3em")
            .style('text-anchor', 'middle')
            .style('font-size', 10)
            .text(d => d.name)

        // var texts = svg.selectAll(null)
        //     .data(datapoints)
        //     .enter()
        //     .append("text")
        //     .attr("class", "nodetext")
        //     .text(d => d.name)
        //     .attr("text-anchor", "middle")
        //     .attr("color", "black")
        //     .attr("font-size", 15)

        simulation.nodes(nodes).on('tick', ticked)

        function ticked() {
            bubbles.attr("cx", function (d) {
                console.log("circle- " + d.x);
                return d.x
            });

            labels.attr("x", function (d) {
                console.log("text- " + d.x);
                return d.x;
            });

            bubbles.attr("cy", function (d) {
                console.log("circle- " + d.y);
                return d.y
            });

            labels.attr("y", function (d) {
                console.log("text- " + d.y)
                return d.y;
            });
        }

    }

})();