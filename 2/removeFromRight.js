"use strict"

function removeFromRight(src, removable) {
	const halfLength = parseInt(src.length / 2);
    const result = src.slice(0, halfLength + 1);
    for (let i = halfLength + 1; i < src.length; i++) {
        if (!removable.includes(src[i])) {
            result.push(src[i]);
        }
    }
    return result;
}

alert(removeFromRight([1,2,3,4,5,4,2,6,7], [1,2,6])); // [1,2,3,4,5,4,7]