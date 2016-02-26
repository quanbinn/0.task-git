var string = "Nutrient data for: 01123, Egg, whole, raw, fresh";
string.split(" ")

var string = "Nutrient data for: 01123, Egg, whole, raw, fresh";
string.split(", ")
["Nutrient data for: 01123", "Egg", "whole", "raw", "fresh"]

var string = "Nutrient,Unit,1Value per 100 g,1 large = 50.0g,1 extra large = 56.0g,1 jumbo = 63.0g,1 cup (4.86 large eggs) = 243.0g,1 medium = 44.0g,1 small = 38.0g,";
string.split(",")
["Nutrient", "Unit", "1Value per 100 g", "1 large = 50.0g", "1 extra large = 56.0g", "1 jumbo = 63.0g", "1 cup (4.86 large eggs) = 243.0g", "1 medium = 44.0g", "1 small = 38.0g", ""]

Nutrient data for: 01123, Egg, whole, raw, fresh
Nutrient,Unit,1Value per 100 g,1 large = 50.0g,1 extra large = 56.0g,1 jumbo = 63.0g,1 cup (4.86 large eggs) = 243.0g,1 medium = 44.0g,1 small = 38.0g,