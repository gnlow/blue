# blue
Simple wrapper for std/fmt/colors.
```
b:          bold
i:          italic
c(color):   text color
bg(color):  background color
```
```ts
import {
    pipe as $, b, i, c, bg,
    pink, black, white
} from "https://denopkg.com/gnlow/blue/mod.ts"

console.log(
    $(c(pink), bg(black))
    `Hello,`,
    $(c(black), bg(white), b, i)
    `World!`
)
```