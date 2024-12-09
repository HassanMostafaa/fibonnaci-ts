const fib = (n: number): number[] => {
  const fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }

  return fibArr;
};

// console.log(fib(10));
