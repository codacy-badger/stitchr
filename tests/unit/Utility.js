const Utility = require('../../src/shared/Utility');
const assert = require('assert');

describe('Utility', function() {
  const UtilityClass = new Utility

  it('should do a thing', function() {
    assert.equal(UtilityClass.doAThing(), 'DONE A THING');
  });
});
