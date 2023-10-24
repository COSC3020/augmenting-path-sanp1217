function augmentingPath(graph, start, end) {
    //Each node will be either true or false if it has been visited.
    let visited = {};
    let path = [start];
    let currNodeQueue = [start];

    while (currNodeQueue.length > 0) {
        let current = currNodeQueue.shift();

        if (current == end) {
            return path;
        }

        visited[current] = true;
        //Goes through each node the current node has an edge with.
        for (let neighbor in graph[current]) {

            if (visited[neighbor]) {
                continue;
            }

            currNodeQueue.push(neighbor);
            path = path.concat(neighbor);
        }
    }

    return [];
}