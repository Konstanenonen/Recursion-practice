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
