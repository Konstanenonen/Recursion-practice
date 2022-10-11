function fibs(num) {
  let current = 0;
  let next = 1;
  let helper = 0;

  let fibArr = [];

  for (let i = 0; i < num; i++) {
    fibArr.push(current);
    helper = current;
    current = next;
    next = helper + next;
  }

  return fibArr;
}

function fib(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fib(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}
