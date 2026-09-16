class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  //
  const isAnagram = (strOne, strTwo) => {
    if (strOne.length != strTwo.length) {
      return false;
    }

    const hOne = {};
    const hTwo = {};

    // created a hash map to story (value,count)
    for (let i = 0; i < strOne.length; i++) {
      hOne[strOne[i]]
        ? (hOne[strOne[i]] = ++hOne[strOne[i]])
        : (hOne[strOne[i]] = 1);
      hTwo[strTwo[i]]
        ? (hTwo[strTwo[i]] = ++hTwo[strTwo[i]])
        : (hTwo[strTwo[i]] = 1);
    }

    //   console.log(hOne, hTwo);
    for (const key in hOne) {
      if (hOne[key] != hTwo[key]) {
        return false;
      }
    }
    return true;
  };
  //
  const result = [];
  const remaining = [...strs];

  for (let i = 0; i < strs.length; i++) {
    const group = [];
    for (let [index, item] of remaining.entries()) {
      if (isAnagram(strs[i], item)) {
        group.push(item);
        remaining[index] = -1;
      }
    }
    group.length > 0 && result.push(group);
  }
  return result;
}
}
