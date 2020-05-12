describe("Hello Function", function(){
    it("Greets the world", function(){
        expect(hello()).toEqual("Hello World !")
    })
})

describe("My calculator", function(){
    it("Returns 0 when the array is empty", function(){
        expect(sumArray([])).toEqual(0);
    });
    it("Returns the same number when the array has just one element", function() {
        expect(sumArray([2])).toEqual(2);
        expect(sumArray([3])).toEqual(3);
    });
    it("If the array has 2 elements, should return the sum of the elements", function(){
        expect(sumArray([1,1])).toEqual(2);
        expect(sumArray([0,1])).toEqual(1);
        expect(sumArray([3,4])).toEqual(7);
        expect(sumArray([0,0])).toEqual(0);
    });
});

