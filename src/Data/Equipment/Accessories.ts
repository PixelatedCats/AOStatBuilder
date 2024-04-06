import { construct, emptyField, Rarity, RarityColor } from "../structure.js"

export default [
    construct({
        name: "Aereus Hat",
        legend: "A dark purple hat lined with bronze, obtained from a Dark Sealed Chest.",
        stats: {
            attackSize: 30,
            intensity: 26
        },
        gemSockets: 0,
        rarity: Rarity.Uncommon,
        rarityColor: RarityColor.Uncommon,
        maxLevel: 120
    }),
]