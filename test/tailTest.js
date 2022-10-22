const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail testing", () => {
  it("should return [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("should returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("should returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });
});
