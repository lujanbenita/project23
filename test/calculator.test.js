test("Add numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("Subtract numbers", () => {
  expect(subtract(3, 2)).toBe(1);
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
