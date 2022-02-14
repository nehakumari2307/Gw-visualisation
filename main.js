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

        data = JSON.parse(data)
        var nodes = pack.nodes(data);
        var node = canvas.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("circle")
            .attr("r", function (d) { return (d.popularity) + 1; })
            .attr("fill", "lightblue")
            .attr("opacity", 0.25)
            .attr("stroke-width", "2");


        node.append("text")
            .text(function (d) { return d.name; })
            .attr("text-anchor", "middle")
            .attr("class", "nodetext")
            .attr("data-classname", function (d) { return d.name; })
            .attr("style", function (d) { return "font-size:" + d.r / 4; })
            .on("click", function (d) { window.open("https://twitter.com/hashtag/" + d.name.trim() + "\?src=hash"); })
            .on("mouseover", function (d) {
                d3.select(this).attr("r", 10).style("fill", "#2f4cff");
                d3.select(this).style("cursor", "pointer");

            })
            .on("mouseout", function (d) {
                d3.select(this).attr("r", 5.5).style("fill", "#000");
            });



    })

})();