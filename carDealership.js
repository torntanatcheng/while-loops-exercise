var cars = ["Mazda", "Honda", "Toyota", "Hyundai", "Subaru", "BMW"];
var i = 0;
var text = ""; //to the array

while(cars[i]){// i acts as a key to the array
	text += cars[i] + " " ;
	i++;
}

console.log(text);
