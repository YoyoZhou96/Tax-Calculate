import Hst from "./Hst.js";

QUnit.test("a basic test example", function (assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});
QUnit.test("income<=40922", function (assert) {
  const oHst = new Hst();
  assert.equal(oHst.calculate(10000), .0505, "We expect HST to be 505");
});
QUnit.test("40922<income<=81847", function (assert) {
  const oHst = new Hst();
  assert.equal(oHst.calculate(50000), .0915, "We expect HST to be 4575");
});
QUnit.test("81847<income <= 150000", function (assert) {
  const oHst = new Hst();
  assert.equal(oHst.calculate(90000), .1116, "We expect HST to be 10044");
});
QUnit.test("150000<income <= 220000", function (assert) {
  const oHst = new Hst();
  assert.equal(oHst.calculate(160000), .1216, "We expect HST to be 19456");
});
QUnit.test("income>220000", function (assert) {
  const oHst = new Hst();
  assert.equal(oHst.calculate(240000), .1316, "We expect HST to be 31584");
});


QUnit.test("income<=45282", function (assert) {
  const tHst = new Hst();
  assert.equal(tHst.calculate(10000), .15, "We expect HST to be 1500");
});
QUnit.test("45282<income<=90563", function (assert) {
  const tHst = new Hst();
  assert.equal(tHst.calculate(50000), .205, "We expect HST to be 10250");
});
QUnit.test("90563<income <= 140388", function (assert) {
  const tHst = new Hst();
  assert.equal(tHst.calculate(100000), .26, "We expect HST to be 26000");
});
QUnit.test("140388<income<=200000", function (assert) {
  const tHst = new Hst();
  assert.equal(tHst.calculate(160000), .29, "We expect HST to be 46400");
});
QUnit.test("income>200000", function (assert) {
  const tHst = new Hst();
  assert.equal(tHst.calculate(240000), .33, "We expect HST to be 79200");
});
