const kata = require('./kata')

test('Check null', () => {
    expect(kata.prime(1)).toBe(null);
})
test('Chevk null',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('Chevk null',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('Chevk null',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})

test('Chevk null',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('Chevk null',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('Chevk null',()=>{
    expect(kata.prime(56)).toEqual([2,2,2,7]);
})
