var AxiosError = require('../../../lib/core/AxiosError');
var isAxiosError = require('../../../lib/helpers/isAxiosError');

describe('helpers::isAxiosError', function() {
  it('should return true if the error is created by core::createError', function() {
    expect(isAxiosError(new AxiosError('Boom!', null, { foo: 'bar' })))
      .toBe(true);
  });

  it('should return true if the error is enhanced by core::enhanceError', function() {
    expect(isAxiosError(AxiosError.from(new Error('Boom!'), null, { foo: 'bar' })))
      .toBe(true);
  });

  it('should return false if the error is a normal Error instance', function() {
    expect(isAxiosError(new Error('Boom!')))
      .toBe(false);
  });
});
