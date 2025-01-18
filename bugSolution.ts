function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: Arguments are of type number

//Alternative solution using type assertion (use with caution)
let result2 = add(5, parseInt('10' as string));