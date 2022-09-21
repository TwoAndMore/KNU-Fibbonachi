# Fibbonachi number

**Послідовність Фібоначчі** - це послідовність, де кожне число є сумою двох попередніх, починаючи з 0 і 1. Тобто:

```F(0) = 0```

```F(1) = 1```

```F(n) = F(n - 1) + F(n - 2)```, для n > 1.

Функція getFibonacciNumber, приймає невід'ємне ціле число n і повертає n-не число з послідовності Фібоначчі.

Приклади:
```
getFibonacciNumber(0) === 0
getFibonacciNumber(1) === 1
getFibonacciNumber(2) === 1 // 1 + 0
getFibonacciNumber(3) === 2 // 1 + 1
getFibonacciNumber(4) === 3 // 2 + 1
getFibonacciNumber(5) === 5 // 3 + 2
```
