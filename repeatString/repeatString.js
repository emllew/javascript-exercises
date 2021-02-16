const repeatString = function (text, n) {
  if (n < 0) {
    return 'ERROR';
  }
  let string = ''
  for (i = 0; i < n; i++) {
    string += text
  }
  return string;
}

module.exports = repeatString
