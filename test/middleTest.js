const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle testing", () => {
  it("should return [6] for [5, 6, 7]", () => {
    assert.deepEqual(middle([5, 6, 7]), [6]);
  });
  it("should returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("should returns [\"Lighthouse\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });
  it("should returns [6, 7] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), [6, 7]); 
  });
});
