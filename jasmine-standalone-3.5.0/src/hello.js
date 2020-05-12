function hello(){
    return 'Hello World !';
}

function sumArray(arr){
    let sum  = 0;
    if(arr.length < 1){
        return sum;
    }else if(arr.length === 1){
        return arr[0];
    }else{
        for(let i = 0; i<arr.length; i++){
            sum+= arr[i]
        }
        return sum;
    }
}