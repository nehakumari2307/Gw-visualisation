/*
1. Javascript       >>> (Main node)
    a.	Art Web          >>>> (Sub node)
        i.	Community         >>>> (Child node)
            1.	20 articles    >>>> (Leave node)
        ii.	Silicon Valley
            1.	10 articles
    b.	Social Impact
        i.	Art Alliance
            1.	5 articles
        ii.	Local Color
            1.	7 articles
        iii.	Threatre
            1.	9 articles
 */

// const nodes = [
//     { "id": "Art Web", "size": 50, "distance":  }, //parent node for 2nd screen, size can be defined based on some parameter
//     { "id": "Community", "size": 25, "distance": },
//     { "id": "Silicon Valley", "size": 25, "distance": },
// ];

// const links = [
//     { "source": 0, "target": 1 },  //Art Web -> Community
//     { "source": 0, "target": 2 },  //Art Web -> Silicon Valley
// ];

export const nodes =[];
export const links =[];

const addSubNode = (node) => {
    node.size = 50; //const value which can be changed 
    nodes.push(node);
};

const addChildNode = (subNode, childNode, size = 25, distance = 150 ) => {  //default size for child node
    childNode.size = size; //const value which can be changed
    nodes.push(childNode);
    links.push({ source: subNode, target: childNode, distance: distance}); //use the node itself as index value of target, source, distance is the distance between 2 nodes
};

const subNode = { "id": "Art Web"}; //parent node for 2nd screen, 
addSubNode(subNode); //this will create a subnode

const assembleChildNode = (id) => { 
    const childNode ={ id };
    addChildNode(subNode, childNode); //pass the subNode and the childNode //Art Web -> Community

    for(let i=0; i<=20; i++) {
        addChildNode(childNode, { "id" : ""}, 10, 50) //pass the childnode abd the leave node //community -> 20 articles with no label, for leave node pass size
    }
};

assembleChildNode("Community"); //Art web -> Community
assembleChildNode("Silicon Valley"); //Art Web -> Silicon Valley