function findIndex(arr, element){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === element){
            return i;
        }
    } 
}

export default findIndex;