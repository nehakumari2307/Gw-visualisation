import { nodes, links } from './data.js';

(function () {

    // const nodes = [
    //     { "id": "Alice" },
    //     { "id": "Bob" },
    //     { "id": "Carol" },
    // ];

    // const links = [
    //     { "source": 0, "target": 1 },  //Alice -> Bob
    //     { "source": 1, "target": 2 },  //Bob -> Carol
    // ];

    const svg = d3.select('#container');

    const width = +svg.attr('width');  //+ symbol converts string value to numerical value
    const height = +svg.attr('height');
    const centerX = width / 2;
    const centerY = height / 2;
    

    const simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(-20)) //-ve strength tells that each node shud be pulled away from each other 
        .force("links", d3.forceLink(links).distance((link) => link.distance)) //distance will determine the structure of the nodes from center
        .force("center", d3.forceCenter(centerX, centerY)); //pulls nodes towards center
    
    const draginteraction = d3.drag().on('drag', (event, node) => {
        node.fx = event.x; //fx& fy is used to fix new position of the nodes when dragged
        node.fy = event.y;
        simulation.alpha(1); 
        simulation.restart();
    });

    const lines = svg.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', link => link.color || 'grey');
    
    const circles = svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('fill', (node) => node.color || 'grey')
        .attr('r', node => node.size)
        .call(draginteraction);
    
    const text = svg.selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .text(node => node.id) // this will pick up the text from data.js
        .attr('text-anchor', 'middle')
        .style('pointer-events', 'none')
        .attr('alignment-baseline', 'middle')

    simulation.on('tick', () => {
        circles.attr('cx', node => node.x) //forces define x & y on each node so its automatically popoulated
            .attr('cy', node => node.y)

        text.attr('x', node => node.x) //forces define x & y on each node so its automatically popoulated
            .attr('y', node => node.y)

        lines.attr('x1', link => link.source.x) //takes the link, gets the source which is a index, find the index for the node and fetch the x value
            .attr('y1', link => link.source.y)
            .attr('x2', link => link.target.x)
            .attr('y2', link => link.target.y)
    });

})();