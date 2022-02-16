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
//     { "id": "Art Web", "size": 50 }, //parent node for 2nd screen, size can be defined based on some parameter
//     { "id": "Community", "size": 25 },
//     { "id": "Silicon Valley", "size": 25 },
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

const addChildNode = (subNode, childNode) => {
    childNode.size = 25; //const value which can be changed
    nodes.push(childNode);
    links.push({ source: subNode, target: childNode}); //use the node itself as index value of target, source
};

const subNode = { "id": "Art Web"}; //parent node for 2nd screen, 
addSubNode(subNode);

addChildNode(subNode, { "id": "Community" }); //pass the subNode and the childNode //Art Web -> Community
addChildNode(subNode, { "id": "Silicon Valley" }); //Art Web -> Silicon Valley