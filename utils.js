//Function used on array of objects to sum by selected key returning a new array of objects
function sumByKey(array,keyName,valueName){
	return [...new Set(array.map(i => i[keyName]))].map(key => {
	return {[keyName]: key, sum: array.filter(j => j[keyName] === key).reduce((acc,cur) => +acc + +[cur[valueName]],0)}
})
}
