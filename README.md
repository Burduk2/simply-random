# Simple Random Functions For JS

```bash
npm i simply-random
```

```js
const Rn = require('simply-random');

/* get random integer */
let myInt = Rn.int(0, 100); // random integer in range from 1 to 100

/* get random float */
let myFloat = Rn.float(1.01, 100); // random floating point number between 1.01 and 100


/* get random string */
let myStr = Rn.str(8, 'abc'); // random 8-char-long string containing only "a", "b", "c"


/* get random item from an array */
let weather = ['rainy', 'snowy', 'sunny'];

let todayWeather = Rn.choice(weather); // rainy | snowy | sunny


/* shuffle an array */
let cards = ['queen', 'king', 'ace'];

let shuffledCards = Rn.shuffle(cards); // random variation of items placed
```