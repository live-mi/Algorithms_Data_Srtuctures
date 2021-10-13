const tree = [
    {
        value: 5,
        children: [
            {
                value: 10,
                children: [
                    {
                        value: 11
                    }
                ],
            },
            {
                value: 7,
                children: [
                    {
                        value: 5,
                        children: [
                            {
                                value: 1
                            }
                        ]
                    }
                ]
            }
        ],
    },
    {
        value: 2,
    }
];


function recursiveSum(tree) {
    let sum = 0;
    tree.forEach(node => {
        sum += node.value;
        if (node.children) {
            sum += recursiveSum(node.children);
        }
    });
    return sum;
}


function loopSum(tree) {
    let sum = 0;
    const stack = [];

    tree.forEach(node => stack.push(node));

    while (stack.length > 0) {
        const node = stack.pop();
        sum += node.value;
        if (node.children) {
            node.children.forEach(node => stack.push(node))
        }
    }
    return sum;
}



const sum1 = recursiveSum(tree);
const sum2 = loopSum(tree);
console.log(sum1, sum2);
