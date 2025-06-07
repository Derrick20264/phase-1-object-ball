// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        // Add the rest of the Brooklyn Nets players here...
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        // Add the rest of the Hornets players here...
      }
    }
  };
}
