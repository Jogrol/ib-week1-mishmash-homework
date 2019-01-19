function giveItBackLater(value, callback){
    function giveValueBack() {
        console.log(value)
        return value;
    }
    setTimeout(giveValueBack(value),1000) 
} 


const promiseToGiveItBackLater = function(value){
    return new Promise(function(resolve,reject){
        console.log(value)
        resolve(value)
    })
}


const addSomePromises = function (value){
    return new Promise(function(resolve,reject){
        console.log(value+value)
        resolve(value+value)
    })
    
}

promiseToGiveItBackLater("somevalue").then((value) => {
     addSomePromises(value);
}).catch()




module.exports = {giveItBackLater,addSomePromises,promiseToGiveItBackLater}