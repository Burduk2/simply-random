class Rn {
    static float = (x, y) => Math.random() * (y - x) + x;
    static int = (x, y) => Math.round(Rn.float(x, y));
    static shuffle = arr => [...arr].sort(_ => Rn.float(-.5, .5));
    static choice = arr => arr[Rn.int(0, arr.length - 1)];
    static str = (len, ch) => Array.from({ length: len }, _ => Rn.choice(ch)).join('');
}

module.exports = Rn;