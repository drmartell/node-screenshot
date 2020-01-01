const timestamp = require('../utils/timestamp');

describe('timestamp', () => {
  it('should return a timestamp string', () => {
    const theTimestamp = timestamp();
    expect(theTimestamp).toEqual(expect.any(String));
    expect(theTimestamp.length).toEqual(19);
  });
});
