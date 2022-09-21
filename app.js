function getFibonacciNumber(n) {
  if (n > 1) {
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
  }

  return n;
}

console.log(getFibonacciNumber(0));
console.log(getFibonacciNumber(1));
console.log(getFibonacciNumber(2));
console.log(getFibonacciNumber(3));
console.log(getFibonacciNumber(4));
console.log(getFibonacciNumber(5));
