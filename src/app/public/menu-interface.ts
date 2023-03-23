export interface IMenu {
    name: string,
    persianName?: string,
    is_enable: boolean,
    image?: string,
    items: Items[],
    subItemTitle?: string,
    subItems? : Items[],
}

export interface Items {
    name: string,
    description: string,
    price: number,
    is_enable: boolean,
}