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

const addChildNode = (subNode, childNode, size = 25, distance = 100 ) => {  //default size for child node
    childNode.size = size; //const value which can be changed
    nodes.push(childNode);
    links.push({ source: subNode, target: childNode, distance: distance}); //use the node itself as index value of target, source, distance is the distance between 2 nodes
};
//function to connect parent node with childnode ( subnode --> childnode && childnode --> leafnode)
const assembleChildNode = (subNode, id, articles) => { 
    const childNode ={ id };
    addChildNode(subNode, childNode); //pass the subNode and the childNode //Art Web -> Community

    for(let i=0; i<=articles; i++) {
        addChildNode(childNode, { "id" : ""}, 10, 50) //pass the childnode abd the leave node //community -> 20 articles with no label, for leave node pass size
    }
};

//function to connect subnodes with each other
const connectSubNodes=(source, target)=> {
    links.push(source,target,distance: 100)
}

const artWebNode = { "id": "Art Web"}; //parent node for 2nd screen, 
addSubNode(artWebNode); //this will create a subnode

assembleChildNode(artWebNode, "Community", 20); //Art web -> Community
assembleChildNode(artWebNode, "Silicon Valley", 10); //Art Web -> Silicon Valley

const socialImpactNode = { "id": "Social Impact"}; //parent node for 2nd screen, 
addSubNode(socialImpactNode); //this will create a new subnode

//connect two subNodes together
connectSubNodes(artWebNode,socialImpactNode);

//add children to second subNode
assembleChildNode(socialImpactNode, "Art Alliance", 5); //Art web -> Community
assembleChildNode(socialImpactNode, "Local Color", 7); //Art Web -> Silicon Valley
assembleChildNode(socialImpactNode, "Threatre", 9); //Art Web -> Silicon Valley