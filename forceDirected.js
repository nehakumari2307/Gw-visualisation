(function () {

    const nodes = [
        { "id": "Alice" },
        { "id": "Bob" },
        { "id": "Carol" },
    ];

    const links = [
        { "source": 0, "target": 1 },  //Alice -> Bob
        { "source": 1, "target": 2 },  //Bob -> Carol
    ];

    const svg = d3.select('#container');

    const width = +svg.attr('width');  //+ symbol converts string value to numerical value
    const height = +svg.attr('height');
    const centerX = width / 2;
    const centerY = height / 2;

    const simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody()) //
        .force("links", d3.forceLink(links))
        .force("center", d3.forceCenter(centerX, centerY)); //pulls nodes towards center


    const circles = svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 10);

    const lines = svg.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', 'black');

    simulation.on('tick', () => {
        circles.attr('cx', node => node.x) //forces define x & y on each node so its automatically poopoulated
            .attr('cy', node => node.y)

        lines.attr('x1', link => link.source.x) //takes the link, gets the source which is a index, find the index for the node and fetch the x value
            .attr('y1', link => link.source.y)
            .attr('x2', link => link.target.x)
            .attr('y2', link => link.target.y)
        console.log('tick');
    });

})();