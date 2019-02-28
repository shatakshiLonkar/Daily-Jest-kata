const kata=require('./kata');
test('Prime 1',()=>{
    expect(kata.prime(1)).toBe(null);
})
test('Prime 2',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('Prime 3',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('Prime 4',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})

test('Prime 8',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('Prime 9',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('Prime 49',()=>{
    expect(kata.prime(49)).toEqual([7,7]);
})