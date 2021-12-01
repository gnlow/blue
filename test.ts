import {
    pipe as $, b, i, c, bg,
    pink, black, white
} from "./mod.ts"

console.log(
    $(c(pink), bg(black))
    `Hello,`,
    $(c(black), bg(white), b, i)
    `World!`
)