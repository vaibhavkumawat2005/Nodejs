module.exports.add = (a, b) => {
  return a + b;
};

module.exports.sub = (a, b) => {
  return a - b;
};

module.exports.rectangle = (a, b) => {
  return a * b;
};

module.exports.triangle = (a, b) => {
  return (a / b) * 2;
};

module.exports.circle = (a,b) => {
    return Math.PI * a * b;
}
