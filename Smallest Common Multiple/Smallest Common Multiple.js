function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    const [min, max] = arr;
  
    let multiple = min;
    for (let i = min + 1; i <= max; i++) {
      multiple = lcm(multiple, i);
    }
  
    return multiple;
  }
  
  
  smallestCommons([1,5]);