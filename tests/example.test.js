const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("give 5% discount to subtotal>=1000 ",()=>{
  expect(calculateFinalAmount(1000)).toBe(950)
})

test("NO Coupon",()=>{
  expect(calculateFinalAmount(100)).toBe(100)
})
test("if normalizedCondition is equal to SAVE10",()=>{
  expect(calculateFinalAmount(100,"SAVE10")).toBe(90)
})
test("if normalizedCondition is equal to FLAT50",()=>{
  expect(calculateFinalAmount(100,"FLAT50")).toBe(50)
})
test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "INVALID")).toThrow(
    "Invalid subtotal",
  );
});