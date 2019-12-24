"use strict"

function isEqual(lhs, rhs) {
    for (let field in lhs) {
        if (typeof(lhs[field]) === "object") {
            if (!rhs || !isEqual(lhs[field], rhs[field])) {
                return false;
            }
        }
        else if (lhs[field] !== rhs[field]) {
            return false;
        }
    }
    return true;
}

const a = isEqual({a: { b: 1 }}, {a: { b: 1 }}); // true
const b = isEqual({a: { b: 1, c: 1}},{a: { b: 1}}); // false
const c = isEqual({}, null); // true
const d = isEqual({a: null}, null); // false
const e = isEqual({a: null}, {a: {}}); // true
const f = isEqual({a: []}, {a: {}}); // true

alert(String(a) + " - " + String(b) + " - " + String(c) + " - " + String(d) + " - " + String(e) + " - " + String(f));