const request = require('superagent');
const wrapper = require('./main');

const {expect} = require('chai');

describe('test wrapper', () => {
  it ('should fetch the data from api source', () => {
    wrapper(
      'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6685a5bc333c419c8fa71716bc3a068c',
        (data) => {
          expect(data).to.be.a('object');
        }
      )
  });

  // Optional
  it('data fetched should be an array', () => {
    wrapper(
      'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6685a5bc333c419c8fa71716bc3a068c',
        (data) => {
          expect(data["articles"]).to.be.a('array');
        }
      )
  });

  it('returns null when there is no api', () => {
    wrapper(
      '',
      (data) => {
        expect(data).to.equal(null);
      }
    )
  });
});
