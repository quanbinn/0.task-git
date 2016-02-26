var name = "Nutrient data for:.*"
var calory = "Energy,kcal,.*"
var unit = "Nutrient,Unit,.*"
var totalFat = "Total lipid (fat),.*"
var saturatedFat = "Fatty acids, total saturated,.*"
var cholesterol = "Cholesterol,.*"

food.name= nutritionData;
food.calory= nutritionData;
food.unit= nutritionData;
food.totalFat= nutritionData;
food.saturatedFat= nutritionData;
food.cholesterol= nutritionData;

food.name = getNutritionData(processedFoodString, name, dataIndex);
food.calory = getNutritionData(processedFoodString, calory, dataIndex);
food.unit = getNutritionData(processedFoodString, unit, dataIndex);
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