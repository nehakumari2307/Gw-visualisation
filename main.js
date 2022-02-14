(function () {
    var diameter = 100, //max size of the bubbles
        color = d3.scale.category20(); //color category

    var bubble = d3.layout.pack()
        .sort(null)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("section")
        .append("svg")
        .attr("width", diameter)
        .attr("height", diameter)
        .attr("class", "bubble");

    d3.csv("test.csv", function (error, data) {

        //convert numerical values from strings to numbers
        data = data.map(function (d) { return d.popularity; });

        //bubbles needs very specific format, convert data to this.
        var nodes = bubble.nodes({ children: data });

        //setup the chart
        var bubbles = svg.append("g")
            .attr("transform", "translate(0,0)")
            .selectAll(".bubble")
            .data(nodes)
            .enter();

        //create the bubbles
        bubbles.append("circle")
            .attr("r", function (d) { return d.r; })
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; })
            .style("fill", function (d) { return color(d.popularity); });

        //format the text for each bubble
        bubbles.append("text")
            .attr("x", function (d) { return d.x; })
            .attr("y", function (d) { return d.y + 5; })
            .attr("text-anchor", "middle")
            .text(function (d) { return d["name"]; })
            .style({
                "fill": "white",
                "font-family": "Verdana, san-serif",
                "font-size": "12px"
            });
    })

})();