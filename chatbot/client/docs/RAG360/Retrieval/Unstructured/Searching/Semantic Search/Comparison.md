:::tip 
Vector indexing 
1. KNN -> ANN -> HNSW 
:::

### K - Nearest Neighbors

1. brute force approach , compares distance between search query embedding with
   each embedding in vector store
2. maintaines an array of size K to make time complexity O(N) instead of O(N\*k)

### Approximate Nearest Neighbors

1. reference - [#youtube](https://youtu.be/DRbjpuqOsjk?si=gJG19qDViRpPZ7TZ)
2. Divide The vector space into Grid /
   [Voronoi](https://cfbrasz.github.io/Voronoi.html) /
   [LSM](https://youtu.be/R-iFka68ZwM?si=Za50uWEHvxe_RLUk) / Tree like structure
   and navigate through it
3. **Approximate** if search embedding is on edge of the grid
4. [Inverted index](https://stackoverflow.com/questions/7727686/whats-the-difference-between-an-inverted-index-and-a-plain-old-index#:~:text=One%20common%20use,1%3A%20Web%20search)
   is used to optimise search
5. Complexity changes based on type, typically O(logN)

### Hierarchical Navigable Small Worlds

1. reference -[#youtube](https://youtu.be/_pewMGesffk?si=pngUG6ZPMXgYNVwV),
   [#blog](https://www.datastax.com/guides/hierarchical-navigable-small-worlds)
2. [Skip lists](https://blog.reachsumit.com/img/posts/skip-list/21skiplistsearch.png)
3. NSW networks are structured in a hierarchical manner (layer by layer) to
   reduce time complexity exponentially
