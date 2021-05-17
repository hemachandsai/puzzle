function evaluateCode(inputFunction){
    if(inputFunction(3, 2020) !== false){
        return false
    }
    const start = new Date(2020, 3);
    const end = new Date(2020, 3);

    if(inputFunction(3, 2019, start) !== false){
        return false
    }

    if(inputFunction(4, 2020, start) !== false){
        return false
    }

    if(!inputFunction(3, 2020, start)){
        return false
    }

    if(inputFunction(4, 2019, start) !== false){
        return false
    }
    
    if(inputFunction(3, 2019, null, end) !== false){
        return false
    }

    if(inputFunction(4, 2020, null, end) !== false){
        return false
    }

    if(!inputFunction(3, 2020, null, end)){
        return false
    }

    if(inputFunction(4, 2019, null, end) !== false){
        return false
    }

    return true;
}