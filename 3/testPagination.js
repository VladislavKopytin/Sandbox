"use strict"

function testPagination(total, pageSize, page) {
	let maxPagesCount = Math.ceil(total / pageSize);
	if (page > maxPagesCount) {
		alert("Error: out of range!");
	}
	else {
		let result = {
			start: pageSize*(page - 1),
			end: pageSize*page
		};
		
		alert(JSON.stringify(result, null, 4));
	}
}

testPagination(10, 5, 1); // (10, 5, 1) => {start: 0, end: 5}
testPagination(10, 5, 2); // (10, 5, 2) => {start: 5, end: 10}
testPagination(10, 5, 3); // (10, 5, 3) => Error('OutsideRange')