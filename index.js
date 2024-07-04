//function that takesin an array and a string and returns an array based on conditions 
function findMatching(array1,string1){
    let matchingArray=[];
    for(let i of array1)
        {
        if(string1===i)//strictly equal to elements of the array 
        {
            matchingArray.push(i)
        }else if(string1.toLowerCase()===i.toLowerCase())//convert the strings to lower case to accomodate case sensitivity
            {
            matchingArray.push(i)
        }
    }
    return matchingArray
}

//function that takes in an array and a string and returns an array whose elements start with the string
function fuzzyMatch(array,string){
    let fuzArray=[];
    for (let i of array){
        if(string===(i.slice(0,string.length))){
            fuzArray.push(i)
        }
    }return fuzArray
}

//function that takes in an array of objects and a string and returns elements of the matchingkey
function matchName(array,string){
    let matchArray=[]
    for(let i of array){
        if(i.name===string){
            matchArray.push(i)
        }
    }
    return(matchArray)
}
