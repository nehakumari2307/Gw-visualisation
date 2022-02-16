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

    const simulation = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody()) //
        .force("links", d3.forceLink(links))
        .force("center", d3.forceCenter()); //pulls nodes towards center

    simulation.on('tick', () => {
        console.log('tick');
    });

})();