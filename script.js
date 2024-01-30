const flavorString = prompt(" Enter your Flavor choice", "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee")

//1-Object 
//Each object contains key and value
//data type STRING: input

const flavor = {
    Vanilla: 3,
    Strawberry: 1,
    Coffee: 2,
};
console.log(flavor)

for(let key in flavor) {
console.log(key)
};

for(let key in flavor) {
    console.table(Object.keys(flavor))
}

//for (let key in flavor) {
   // console.table(flavor[key])
//}



//create an empty object to hold counts

{vanilla: 3,
chocolate: 1,
mango: 2
}
const flavorCounts = {}
//loop over our array of flavors 
for(let i=0; i<flavorArr.length; i++) {
//For each flavor ask: is there a count for this flavor Yes/no new key value pair for vanilla, what should we do instead (to process the last vanilla) that should go from 1 to 2
const flavorsSoFar = Object.keys(flavorCounts)
//If Yes, update that count (+1)
if(flavorsSoFar.includes(flavorArr[i])) {
flavorCounts[flavorArr[i]] += 1
}
//Else, start counting that flavor
else {
    flavorCounts[flavorArr[i]] = 1
}
}
console.table(flavorCounts)

{
    vanilla: 2,
    chocolate: 1, 
    strawberry: 1

}
const flavorCounts = {}
// After our loop ends 
//after our loop extends, display a table with how many of each 
//flavor they want

