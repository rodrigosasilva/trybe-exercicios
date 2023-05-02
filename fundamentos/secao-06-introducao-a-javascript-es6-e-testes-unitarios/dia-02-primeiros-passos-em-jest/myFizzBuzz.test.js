const myFizzBuzz = require('./myFizzBuzz');

describe('Testa função myFizzBuzz', () => {
  it('myFizzBuzz return expected array', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(10)).toEqual('buzz');
    expect(myFizzBuzz(11)).toEqual(11);
  });
});
