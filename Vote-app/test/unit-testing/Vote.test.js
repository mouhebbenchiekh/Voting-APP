const convert=require('../../routes/vote');
test('should return error message', () => { 
    expect(convert.ConvertVote({})).toBe('user non autorisé')
 })
 test('should return error message', () => { 
    expect(convert.ConvertVote({_id:"123456"},{})).toBe('bad req')
 })
 test('should return an object', () => { 
    expect(convert.ConvertVote({_id:"123456"},{subject:"1234567",choice:"true"})).toStrictEqual({user:"123456",subject:"1234567",choice:"true"})
 })
