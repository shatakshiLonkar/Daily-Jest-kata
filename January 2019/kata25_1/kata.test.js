const kata=require('./kata');

test('Prime1',()=>{
    expect(kata.prime(1)).toBe(null);
})
test('Prime2',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('Prime3',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('Prime4',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})
test('Prime8',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('Prime9',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('Prime56',()=>{
    expect(kata.prime(56)).toEqual([2,2,2,7]);
})
