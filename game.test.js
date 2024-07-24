import { Game } from "./game";

describe("Game Tests", () => {
  it("should return gridSize", () => {
    const game = new Game();

    game.settings = {
      gridSize: {
        columns: 10,
        row: 10,
      },
    };

    const settings = game.settings;

    expect(settings.gridSize.row).toBe(10);
    expect(settings.gridSize.columns).toBe(10);
  });
});
