var containsDuplicate = function (nums) {
  let arr = [];

  for (let num of nums) {
    if (arr.includes(num)) {
      return true;
    } else {
      arr.push(num);
    }
  }
  // return false;
  console.log(arr);
};
containsDuplicate([2, 3, 1, 1, 4]);
containsDuplicate([2, 3, 1, 4]);
