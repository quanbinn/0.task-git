fs = require('fs')

var food = {};
var dataIndex = 3;


fs.readFile('egg-remove-quote.csv', 'utf8', function (err,data) {
	if (err) throw err;

  // step 1: change data to the string
  var processedFoodString = data.toString();

//var name = "Nutrient data for:.*"
var calory = "Energy,kcal,.*"
//var unit = "Nutrient,Unit,.*"
var totalFat = "Total lipid.*"
var saturatedFat = "Fatty acids, total saturated,.*"
var cholesterol = "Cholesterol,.*"

//food.name = getNutritionData(processedFoodString, name, dataIndex);
food.calory = getNutritionData(processedFoodString, calory, dataIndex);
//food.unit = getNutritionData(processedFoodString, unit, dataIndex);
food.totalFat = getNutritionData(processedFoodString, totalFat, dataIndex);
food.saturatedFat = getNutritionData(processedFoodString, saturatedFat, dataIndex);
food.cholesterol = getNutritionData(processedFoodString, cholesterol, dataIndex);

function getNutritionData (processedFoodString, matchString, dataIndex) {
	var re = new RegExp(matchString, "g");                             // create a RegExp instance - "re"
	var matchStringResult = processedFoodString.match(re, "regex");    // get the result of regular expression execution - "[]"
	var firstElement = matchStringResult[0];                           // get the first element of the array
	var nutritionData = firstElement.split(',')[dataIndex];            // get the nutrition data in the assigned index
	return nutritionData;                                              // return the nutrition data
};

	console.log("binxia is coming");
	console.log(food);

});




