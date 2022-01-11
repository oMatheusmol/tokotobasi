'use stric';
const _ = require('lodash');

module.exports = {
  toFirstCase: (text, upper = true) => {
    let words = text.split(' ');
    let w = words[0];

    if (upper === true) words[0] = w[0].toUpperCase() + w.slice(1);
    else words[0] = w[0].toLowerCase() + w.slice(1);

    return words.join(' ');
  },
  isTimespan: (value) => {
    let input = parseInt(value);

    let result = isNaN(input)
      ? false
      : typeof input === 'number'
      ? value.length == 13
        ? true
        : false
      : false;
    return result;
  },
  removeHyphen(text) {
    let value = '';
    let hyphen = false;
    for (let index = 0; index < text.length; index++) {
      const s = text.substring(index, index + 1);
      if (s == '-') {
        hyphen = true;
      } else {
        if (hyphen) {
          value += s.toUpperCase();
          hyphen = false;
        } else {
          value += s;
        }
      }
    }
    return value;
  },
  toResourceName(text) {
    return this.toFirstCase(this.removeHyphen(text));
  },
};
