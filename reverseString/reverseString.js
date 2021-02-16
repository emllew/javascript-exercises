const reverseString = function(string) {
  const split = string.split("");
  const reverse = split.reverse();
  const join = reverse.join("");
  return join;
}

module.exports = reverseString
