
const kata=require('./kata');

test('prime',()=>{
    expect(kata.prime(1)).toBe(null);
})
test('prime',()=>{
    expect(kata.prime(2)).toEqual([2]);
})
test('prime',()=>{
    expect(kata.prime(3)).toEqual([3]);
})
test('prime',()=>{
    expect(kata.prime(4)).toEqual([2,2]);
})
test('prime',()=>{
    expect(kata.prime(8)).toEqual([2,2,2]);
})
test('prime',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('prime',()=>{
    expect(kata.prime(9)).toEqual([3,3]);
})
test('prime',()=>{
    expect(kata.prime(28)).toEqual([2,2,7]);
})


