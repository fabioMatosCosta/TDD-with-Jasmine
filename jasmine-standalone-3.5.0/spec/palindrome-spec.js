var palindromes = [
    "A man, a plan, a canal, Panama!",
    "Amor, Roma",
    "race car",
    "stack cats",
    "step on no pets",
    "taco cat",
    "put it up",
    "Was it a car or a cat I saw?",
    "No 'x' in Nixon"
]

describe("isPalindrome", function(){
    it("should be a function", function() {
        expect(typeof isPalindrome).toEqual("function");
    })
    it("should not accept anything else than a string", function() {
        expect(function(){isPalindrome(123123)}).toThrow(new Error("Input should be a string"))
    })
    it("should return true if the function is a palindrome", function() {
        for(let i = 0 ; i < palindromes.length; i++){
            expect(isPalindrome(palindromes[i])).toBe(true);
        }
    })
    it("should return false if the function isn't a palindrome",()=> {
        expect(isPalindrome("asdfasfasf asdf")).toBe(false);
        expect(isPalindrome("asdfasfasf asdf")).toBe(false);
        expect(isPalindrome("lala adsf dsf asdf")).toBe(false);
        expect(isPalindrome("I Like TDD")).toBe(false);
    })
})  

describe("sanitizeInput", function(){
    it("should be a function", ()=>{
        expect(typeof sanitizeInput).toEqual("function");
    })
    it("should remove every non alphabetic character", function() {
        expect(sanitizeInput("asdf!!?sdf sdf")).toEqual("asdfsdfsdf");
        expect(sanitizeInput("#$%^asdf adf he!+")).toEqual("asdfadfhe");
    })

    it("should always return a lowercase string", function() {
        expect(sanitizeInput("AAAA")).toEqual("aaaa");
        expect(sanitizeInput("HeLLooO")).toEqual("hellooo");
        expect(sanitizeInput("HeL  Loo @#O")).toEqual("hellooo");
    })
}) 

describe("reverseString", ()=>{
    it("should be a function", ()=>{
        expect(typeof reverseString).toEqual("function")
    });
    it("should reverse the string that was passed to it", ()=> {
        expect(reverseString("car")).toEqual("rac");
        expect(reverseString("seemewalking")).toEqual("gniklawemees");
    })
})