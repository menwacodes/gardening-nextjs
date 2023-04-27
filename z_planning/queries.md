sorting flowers
let sortedFlowers = flowers.slice().sort((a,b) => a.attributes.root.minDepth > b.attributes.root.minDepth ? 1 : -1)