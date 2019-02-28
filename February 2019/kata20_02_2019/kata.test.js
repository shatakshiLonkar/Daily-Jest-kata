const kata=require('./kata');

test('Check null',()=>{
    expect(kata.prime(1)).toBe(null);
})
test('Chevk 2',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('check 3',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('check 4',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})
test('Chevk 8',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('Chevk 9',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('Chevk 42',()=>{
    expect(kata.prime(42)).toEqual([2,3,7]);
})
