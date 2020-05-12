function isPalindrome(str) {
    if(typeof str !== "string") throw new Error("Input should be a string");
    let sanitizedStr = sanitizeInput(str);
    let reversedStr = reverseString(sanitizedStr);
    if(sanitizedStr === reversedStr) return true 
    else return false
}

function sanitizeInput(str) {
    let onlyAlpha = "";
    for(let i = 0; i<str.length; i++){
        if(str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z" ){
            onlyAlpha += str[i]
        }
    }
    return onlyAlpha.toLowerCase()
}

function reverseString(str) {
    let reverseStr ="";
    for(let i = str.length - 1; i>-1; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}