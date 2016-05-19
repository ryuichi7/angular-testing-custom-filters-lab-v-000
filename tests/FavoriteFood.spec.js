describe('Favorite Food Filter', function () {
	var $controller;
			
	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));


	it('filters by favorite food', function() {
		var mockedList = [{
			name: "Brett",
			favoriteFood: "Chicken"
		}, {
			name: "Evan",
			favoriteFood: "Cheese"
		}, {
			name: "Emily",
			favoriteFood: "Cheese"
		}];

		var foodFilter = $filter('favoriteFood')(mockedList, 'Cheese')

		expect(foodFilter.length).toBe(2)
		expect(foodFilter[0].name).toBe('Evan')

	})
	
});
