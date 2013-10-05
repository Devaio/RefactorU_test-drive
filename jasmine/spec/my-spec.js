describe("Module", function() {
  it("should do something", function() {
    expect(true).toEqual(true);
  });
});


describe("Splice", function () {
	it("Should be able to remove elements from array", function () {
		expect(assertArraysEqual(splice(['a','b','c','d','e'], 2, 2), ['a','b','e'])).toBeTruthy()
	});

	it("Should leave original array unchanged", function() {
		expect(assertArraysEqual(a,  ['a','b','c','d','e'])).toBeTruthy()
	});

	it("Should be able to insert an item with the fourth argument", function() {
		expect(assertArraysEqual(splice(['a','b','c','d','e'], 1, 2, 'z'),  ['a','z','d','e'])).toBeTruthy()
	});

	it("Should be able to insert elements without removing anything", function() {
		expect(assertArraysEqual(splice(['a','b','c','d','e'], 1, 0, 'z'),  ['a','z','b','c','d','e'])).toBeTruthy()
	});

	it("Should insert arbitrarily high index at the end", function() {
		expect(assertArraysEqual(splice(['a','b','c'], 99, 0, 'z'),  ['a','b','c','z'])).toBeTruthy()
		expect(assertArraysEqual(splice(['a','b','c'], 99, 1, 'z'),  ['a','b','c','z'])).toBeTruthy()
	});

	it("Should be able to insert an arbitrary number of values using multiple arguments", function() {
		expect(assertArraysEqual(splice(['a','b','c'], 99, 1, 'x','y','z'),  ['a','b','c','x','y','z'])).toBeTruthy()
	});

});





