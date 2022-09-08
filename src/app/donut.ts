export interface Donut {
    id: number,
    name: string,
    ref: string,
    photo: string,
    photo_attribution: string
}

export interface DonutsInfo {
    count: number,
    results: Donut[]
}

export interface DonutDetails {
    id: number,
    ref: string,
    name: string,
    calories: number,
    extras: string[],
    photo: string,
    photo_attribution: string
}