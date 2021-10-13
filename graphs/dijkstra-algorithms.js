// const matrix = [
//     [0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
// ];

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};

    // Searching for neighboring
    Object.keys(graph).forEach(node => {
        const weight = graph[start][node];
        costs[node] = weight || Infinity;
    });

    console.log(costs);

    let node = findLowestCostNode(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findLowestCostNode(costs, processed);
    }
    return costs;
}

function findLowestCostNode(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode;

    Object.keys(costs).forEach(node => {
        const cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}

const path = shortPath(graph, 'a', 'g');
console.log(path);
