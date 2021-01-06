// Note that a dynamic `import` statement here is required due to
// webpack/webpack#6615, but in theory `import { greet } from './pkg';`
// will work here one day as well!
// const oso = import('../../../polar-wasm-api/pkg');

// oso.then(m => {
//     window.polar = new m.Polar()
// })

// const oso = require("oso")

// oso.then(m =>
//     window.oso = m
// )


import("oso").catch(e =>
    console.error("Error importing `oso`:", e)
).then(m => window.oso = m)