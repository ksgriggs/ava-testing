const test = require("ava");

const { add, subtract } = require("./script");

test("add", (t) => {
  t.is(add(1, 5), 6);
});

test("subtract", (t) => {
  t.is(subtract(10, 4), 6);
});

// test("foo", (t) => {
//   t.pass();
// });

// test("bar", async (t) => {
//   const bar = Promise.resolve("bar");
//   t.is(await bar, "bar");
// });
