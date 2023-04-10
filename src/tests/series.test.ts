import { expect, test } from "vitest";
import { Series } from "../utils";

const series = new Series();

const FIRST_10_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const FIRST_10_MULTIPLIE3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

test("first ten multiplies3", () => {
  for (let i = 0; i < 10; i++) {
    series.setNth(i + 1);
    const multiple3 = series._getNthTermOf3MultipleSeries();
    console.log({ multiple3 });
    expect(multiple3).toBe(FIRST_10_MULTIPLIE3[i]);
  }
});
test("first ten primes", () => {
  for (let i = 0; i < 10; i++) {
    series.setNth(i + 1);
    const prime = series._getNthTermOfPrimeSeries();
    console.log({ prime });
    expect(prime).toBe(FIRST_10_PRIMES[i]);
  }
});
