(function () {

    import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3';

    const nodes = [
        { "id": "Alice" },
        { "id": "Bob" },
        { "id": "Carol" },
    ];

    const links = [
        { "source": 0, "target": 1 },  //Alice -> Bob
        { "source": 1, "target": 2 },  //Bob -> Carol
    ];

    const simulation = forceSimulation(nodes)
        .force("charge", forceManyBody()) //
        .force("links", forceLink(links))
        .force("center", forceCenter()); //pulls nodes towards center

    simulation.on('tick', () => {
        console.log('tick');
    });

})();