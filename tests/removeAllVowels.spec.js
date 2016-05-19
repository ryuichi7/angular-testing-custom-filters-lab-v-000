describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('removes all vowels from a string', function() {
		var str = "Hi There How are you!"

		var vowelFilter = $filter('removeAllVowels')(str)

		expect(vowelFilter).toBe('H Thr Hw r y!')

	})
});
