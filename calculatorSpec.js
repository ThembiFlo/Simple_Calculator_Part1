describe('Calculator', function() {
	it('should add two numbers', function() {
		expect(add(1, 2)).toBe(3);
	});

	it('should add negative numbers ', function() {
		expect(add(-1, -2)).toBe(-3);
	});

	it('should add multiple numbers', function() {
		expect(add(1, 2, 3, 4)).toBe(10);
	});

	it('should multiply two numbers', function() {
		expect(multiply(1, 2)).toBe(2);
	});

	it('should multiply multiple numbers', function() {
		expect(multiply(1, 2, 3, 4)).toBe(24);
	});
});
