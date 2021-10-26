import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/Asparagus.js"
import { createCorn } from "./seeds/Corn.js"
import { createPotato } from "./seeds/Potato.js"
import { createSunflower } from "./seeds/Sunflower.js"
import { createWheat } from "./seeds/Wheat.js"
import { createSoybean } from "./seeds/Soybean.js"


const asparagusSeed = createAsparagus()
const cornSeed= createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const yearlyPlan = createPlan()

console.log(yearlyPlan)
console.log(asparagusSeed)
console.log(cornSeed)
console.log(potatoSeed)
console.log(soybeanSeed)
console.log(sunflowerSeed)
console.log(wheatSeed)

