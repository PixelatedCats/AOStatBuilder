export enum Rarity {
    "Uncommon",
    "Rare",
    "Exotic"
}

export const enum RarityColor {
    "Uncommon" = "#6765EC",
    "Rare" = "#817346",
    "Exotic" = "#6765EC"
}

export type DataLayout = {
    name: string,
    legend: string,
    stats: {
        defense: number,
        power: number,
        agility: number,
        attackSize: number,
        attackSpeed: number,
        intensity: number,
        insanity: number,
        drawback: number,
        warding: number,
        resistance: number
    },
    gemSockets: number,
    maxLevel: number,
    rarity: Rarity,
    rarityColor: RarityColor
}

let counter = 0

function constructor(params: {
    name: string,
    legend: string,
    stats: {
        defense?: number,
        power?: number,
        agility?: number,
        attackSize?: number,
        attackSpeed?: number,
        intensity?: number,
        insanity?: number,
        drawback?: number,
        warding?: number
        resistance?: number,
    },
    gemSockets: number,
    maxLevel: number,
    rarity: Rarity,
    rarityColor: RarityColor
}) {
    return {
        name: params.name,
        legend: params.legend,
        stats: {
            defense: params.stats.defense ?? 0,
            power: params.stats.defense ?? 0,
            agility: params.stats.agility ?? 0,
            attackSize: params.stats.attackSize ?? 0,
            attackSpeed: params.stats.attackSpeed ?? 0,
            intensity: params.stats.intensity ?? 0,
            insanity: params.stats.insanity ?? 0,
            drawback: params.stats.drawback ?? 0,
            warding: params.stats.warding ?? 0,
            resistance: params.stats.resistance ?? 0
        },
        gemSockets: params.gemSockets,
        maxLevel: params.maxLevel,
        rarity: params.rarity,
        rarityColor: params.rarityColor
    }
}

function empty() {

}

export const construct = constructor;
export const emptyField = empty;