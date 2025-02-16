var services = {
    "haircut": "60 hrn",
    "shaving": "80 hrn",
    "wash hair": "100 hrn"
}

services.basicPrice = function() {
    return Math.max(...Object.values(this)
    .filter(value => typeof value === "string" && value.includes("hrn"))
    .map(value => parseInt(value)))
}

services.minPrice = function() {
    return Math.min(...Object.values(this)
    .filter(value => typeof value === "string" && value.includes("hrn"))
    .map(value => parseInt(value)))
}

services.additionalCostPrice = function() {
    return Object.values(this)
    .filter(value => typeof value === "string" && value.includes("hrn"))
    .map(value => parseInt(value))
    .reduce((sum, price) => sum + price, 0);
}

services['Broken glass'] = "200 hrn";

console.log("Total cost services", services.basicPrice(), "hrn")
console.log("Min cost", services.minPrice(), "hrn")
console.log("Max cost including additional services", services.additionalCostPrice(), "hrn")