function giveItBackLater(value, callback){
    function giveValueBack(value) {
        return value;
    }
    setTimeout(giveValueBack(value),1000) 
} 

const promiseToGiveItBackLater = function(value){
    return new Promise(function(resolve,reject){
        resolve(`${value}`);
    })
}

const addSomePromises = function (value){
    return new Promise(function(resolve,reject){
        resolve(`${value}${value}`);
    })
    
}
//Tried to to create the chain with the "then" key word. 
//When I ran this code with node I do get the value that I inserted back twice.
//promiseToGiveItBackLater("value").then((value) => {addSomePromises(value);})

module.exports = {giveItBackLater,addSomePromises,promiseToGiveItBackLater}