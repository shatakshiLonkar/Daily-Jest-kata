const kata=require('./kata')
test('Prime Factor 1 is equal to null',()=> {
    expect(kata.prime(1)).toBe(null);
});
test('check 2',()=> {
    expect(kata.prime(2)).toEqual([2]);
});
test('check 3',()=> {
    expect(kata.prime(3)).toEqual([3]);
});
test('check 4',()=> {
    expect(kata.prime(4)).toEqual([2,2]);
});
test('check 8',()=> {
    expect(kata.prime(8)).toEqual([2,2,2]);
});
test('check 9',()=> {
    expect(kata.prime(9)).toEqual([3,3]);
});
test('check 56',()=> {
    expect(kata.prime(56)).toEqual([2,2,2,7]);
});