/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901230') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var should = chai.should();
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  // prefix of 65
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511321432143214').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511321432143214321').should.equal('Discover');
  });
  // prefix of 644
  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441321432143214').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6441321432143214321').should.equal('Discover');
  });
  // prefix of 645
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6451321432143214').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6451321432143214321').should.equal('Discover');
  });
  // prefix of 646
  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6461321432143214').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461321432143214321').should.equal('Discover');
  });
  // prefix of 647
  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6471321432143214').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6471321432143214321').should.equal('Discover');
  });
  // prefix of 648
  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6481321432143214').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6481321432143214321').should.equal('Discover');
  });
  // prefix of 649
  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6491321432143214').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6491321432143214321').should.equal('Discover');
  });
  // prefix of 6011
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011321432143214').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011321432143214321').should.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  // prefix of 5018
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501832143214').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018321432141').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50183214321412').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501832143214123').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018321432141234').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50183214321412345').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501832143214123456').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018321432141234567').should.equal('Maestro');
  });
  // prefix of 5020
  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502032143214').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020321432141').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50203214321412').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502032143214123').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020321432141234').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50203214321412345').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502032143214123456').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020321432141234567').should.equal('Maestro');
  });
  // prefix of 5038
  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503832143214').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038321432141').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50383214321412').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503832143214123').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038321432141234').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50383214321412345').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503832143214123456').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038321432141234567').should.equal('Maestro');
  });
  // prefix of 6304
  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630432143214').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304321432141').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63043214321412').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630432143214123').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304321432141234').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63043214321412345').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630432143214123456').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304321432141234567').should.equal('Maestro');
  });
});

describe('China UnionPay', function() {
  // Write full test coverage for the China UnionPay card
  // China UnionPay always has a prefix of 622126-622925, 624-626, 
  // or 6282-6288 and a length of 16-19.
  var should = chai.should();

  // Tests for prefixes from 622126-622925
  for(let i = 622126; i <= 622925; i++) {
    it('has a prefix of ' + i + ' and a length of 16', function() {
    detectNetwork(i + '1432141234').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 17', function() {
      detectNetwork(i + '14321412345').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 18', function() {
      detectNetwork(i + '143214123456').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 19', function() {
      detectNetwork(i + '1432141234567').should.equal('China UnionPay');
    });
  }
  // Tests for prefixes from 624-626
  for(let i = 624; i <= 626; i++) {
    it('has a prefix of ' + i + ' and a length of 16', function() {
    detectNetwork(i + '4321432141234').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 17', function() {
      detectNetwork(i + '43214321412345').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 18', function() {
      detectNetwork(i + '432143214123456').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 19', function() {
      detectNetwork(i + '4321432141234567').should.equal('China UnionPay');
    });
  }
  // Tests for prefixes from 6282-6288
  for(let i = 6282; i <= 6288; i++) {
    it('has a prefix of ' + i + ' and a length of 16', function() {
    detectNetwork(i + '321432141234').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 17', function() {
      detectNetwork(i + '3214321412345').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 18', function() {
      detectNetwork(i + '32143214123456').should.equal('China UnionPay');
    });
    it('has a prefix of ' + i + ' and a length of 19', function() {
      detectNetwork(i + '321432141234567').should.equal('China UnionPay');
    });
  }
});

describe('Switch', function() {
  // Write full test coverage for the Switch card
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 
  // 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var should = chai.should();
  var cardPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];


  // Iterate over card prefixes
  for(let i = 0; i < cardPrefixes.length; i++) {
    (function(i) {
      // Set prefixLength
      var prefixLength = cardPrefixes[i].length;
      var currPrefix = cardPrefixes[i];
      // Output tests, replacing the first prefixLength numbers from each
      // cardNumber input to detectNetwork with cardPrefixes[i]
      it('has a prefix of ' + currPrefix + ' and a length of 16', function() {
        detectNetwork(currPrefix + '4903321432141212'.slice(prefixLength)).should.equal('Switch');
      });
      it('has a prefix of ' + currPrefix + ' and a length of 18', function() {
        detectNetwork(currPrefix + '490332143214121234'.slice(prefixLength)).should.equal('Switch');
      });
      it('has a prefix of ' + currPrefix + ' and a length of 19', function() {
        detectNetwork(currPrefix + '4903321432141212345'.slice(prefixLength)).should.equal('Switch');
      });

    })(i);
  }

});