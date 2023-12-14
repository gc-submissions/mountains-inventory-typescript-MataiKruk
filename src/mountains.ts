export interface Mountain {
    name: string,
    height: number
};

export const findNameOfTallestMountain = (mountains: Mountain[]) : string|undefined => {
    let biggestHeight = 0;
    for(let mountain of mountains) {
        if(mountain.height > biggestHeight) {
            biggestHeight = mountain.height;
        }
    }

    let tallestMountain = mountains.find(m=> m.height === biggestHeight)?.name;
    return tallestMountain;
};

