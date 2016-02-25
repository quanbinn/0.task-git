fs = require('fs')

var food = {};                                                               // create a empty food
var dataIndex = 5;                                                           // the position of the nutrition fact needed

var name = "Nutrient data for:.*"
var unit = "Nutrient,Unit,.*"
var calory = "Energy,kcal,.*"
var totalFat = "Total lipid.*"
var saturatedFat = "Fatty acids, total saturated,.*"
var cholesterol = "Cholesterol,.*"

fs.readFile('egg.csv', 'utf8', function (err,data) {
	if (err) throw err;

  var processedFoodStringHaveQuote = data.toString();                        // change data to the string
	var processedFoodString = processedFoodStringHaveQuote.replace(/"/g, '');  // remove all " 

	food.name = getFoodName(processedFoodString, name) 
	food.unit = getNutritionData(processedFoodString, unit, dataIndex);
	food.calory = getNutritionData(processedFoodString, calory, dataIndex);
	food.totalFat = getNutritionData(processedFoodString, totalFat, dataIndex);
	food.saturatedFat = getNutritionData(processedFoodString, saturatedFat, dataIndex + 1);
	food.cholesterol = getNutritionData(processedFoodString, cholesterol, dataIndex);

	function getNutritionData (processedFoodString, matchString, dataIndex) {
		var re = new RegExp(matchString, "g");                             // create a RegExp instance - "re"
		var matchStringResult = processedFoodString.match(re, "regex");    // get the result of regular expression execution - "[]"
		var firstElement = matchStringResult[0];                           // get the first element of the array
		var nutritionData = firstElement.split(',')[dataIndex];            // get the nutrition data in the assigned index
		return nutritionData;                                              // return the nutrition data
	};

		function getFoodName (processedFoodString, matchString) {
		var re = new RegExp(matchString, "g");                             // create a RegExp instance - "re"
		var matchStringResult = processedFoodString.match(re, "regex");    // get the result of regular expression execution - "[]"
		var firstElement = matchStringResult[0];                           // get the first element of the array

		var str = firstElement.split(", ");
		var foodName = str[1]+ "," + str[2];

		return foodName;                                             
	};


	console.log("binxia is coming");
	console.log(food);

});




