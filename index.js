function findMatching(arrayOfStrings, string){
    //Case insensitive
    const matchingArrayofStrings=arrayOfStrings.filter(name=>{if(name.toLowerCase()===string.toLowerCase()){return true;}});
    return matchingArrayofStrings;
}

function fuzzyMatch(arrayOfStrings,string){
    const firstThreeLetters=string.substring(0,string.length);
    console.log(firstThreeLetters);
    return arrayOfStrings.filter(name=>{if(name.substring(0,firstThreeLetters.length)===firstThreeLetters){return true}});
}

function matchName(arrayOfObjects,suppliedString){
    const arrayOfObjectsNamedString=arrayOfObjects.filter(objectInArray=>{if(objectInArray.name===suppliedString){
        return true
    }
    else{

    }
})
    return arrayOfObjectsNamedString
}