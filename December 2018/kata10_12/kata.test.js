const kata=require('./kata')

test('Prime Factor 1 is equal to null',()=> {
    expect(kata.prime(1)).toBe(null);
});

test('Prime Factor 2 is equal to 2',()=> {
    expect(kata.prime(2)).toEqual([2]);
});

test('Prime Factor 3 is equal to 3',()=> {
    expect(kata.prime(3)).toEqual([3]);
});


test('Prime Factor 2,2 is equal to 4',()=> {
    expect(kata.prime(4)).toEqual([2,2]);
});

test('Prime Factor 2,2,2 is equal to 8',()=> {
    expect(kata.prime(8)).toEqual([2,2,2]);
});

test('Prime Factor 3,3 is equal to 9',()=> {
    expect(kata.prime(9)).toEqual([3,3]);
});

test('Prime Factor 3,3,3 is equal to 27',()=> {
    expect(kata.prime(27)).toEqual([3,3,3]);
});