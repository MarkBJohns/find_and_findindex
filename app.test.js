describe('findUserByName()',function(){
    let testArr=[{username:'abc'},{username:'xyz'}];
    it('should find a username value in an object array and return the matching object',function(){
        expect(findUserByName(testArr,'abc')).toEqual({username:'abc'});
    })
    it('should return "undefined" if no object has the key value',function(){
        expect(findUserByName(testArr,'mno')).toEqual(undefined);
    })
})

describe('removeUser()',function(){
    let testArr=[{username:'abc'},{username:'xyz'}];
    it('should remove an object from an array and return the object that got removed',function(){
        expect(removeUser(testArr,'abc')).toEqual({username:'abc'});
        expect(testArr).toEqual([{username:'xyz'}]);
    })
    it('should return "undefined" if no object has the key value',function(){
        expect(removeUser(testArr,'mno')).toEqual(undefined);
    })
})