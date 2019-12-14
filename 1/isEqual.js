function isEqual(lhs, rhs) {
    for (let field in lhs) {
        if (typeof(lhs[field]) === "object") {
            if (!isEqual(lhs[field], rhs[field])) {
                return false;
            }
        }
        else if (lhs[field] !== rhs[field]) {
            return false;
        }
    }
    return true;
}

let a = isEqual({a: { b: 1 }}, {a: { b: 1 }}); // true
let b = isEqual({a: { b: 1, c: 1}},{a: { b: 1}}); // false

alert(String(a) + " - " + String(b));