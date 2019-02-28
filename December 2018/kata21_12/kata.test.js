const kata=require('./kata');

test('Prime no is',()=>{
    expect(kata.prime(1)).toBe(null);
})
test('Prime no is',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('Prime no is',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('Prime no is',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})
test('Prime no is',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('Prime no is',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('Prime no is',()=>{
    expect(kata.prime(1269)).toEqual([3,3,3,47]);
})