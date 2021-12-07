
var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
const main = require('../main');

// Results

const substrationResult = main.substracion(4, 2);
const arrayOfNumber = main.arrayOfNumber();

describe('Main Suite', function () {
   describe('Hello world Method - test case', function () {
      it('Hello world text is as expectd', function () {
         const result = main.helloWorld();
         assert.equal(result, 'Hello world');
      })
      it('Validate data type', function () {
         const result = main.helloWorld();
         assert.typeOf(result, 'string', 'The expected data type is a string')
      });

   });
   describe('Substracion Method - test case', function () {
      it('Less then 5', function () {
         const result = main.substracion(4, 2);
         assert.isBelow(result, 5);
      })
      it('Validate data type', function () {
         const result = main.substracion(4, 2);
         assert.typeOf(result, 'number', 'The expected data type is a number')
      })

   })

   describe('Array Method - test case', function () {
      it('Array incluthes the number 5', function () {
         const result = main.arrayOfNumber();
         assert.include(result, 5);
      })
      it('Validate array length', function () {
         const result = main.arrayOfNumber();
         assert.lengthOf(result, 6, 'The expected data type is a number')
      })

   })
})

//  describe('Testing assert function: ', function() {
//    describe('Check addTest Function', function(){
//      it('Check the returned value using : assert.equal(value, value): ', function() {
//          const helloWorldText = main.helloWorld();
//          assert.equal(helloWorldText,'Hello world');
//      });
//    });
//  })

//  describe('Testing should function: ', function() {
//    describe('Check addTest Function', function(){
//      it('Check the returned value using : result.should.be.equal(value): ', function() {
//         result = main.helloWorld();
//         result.should.be.equal('Hello world');
//      })
//    })
//  })
//  describe('Testing expect function: ', function() {
//    describe('Check addTest Function', function(){
//      it('Check the returned value using : expect(result).to.be.a(value);: ', function() {
//         result = main.helloWorld();;
//          expect(result).to.equal('Hello');
//      })
//    })
//  })