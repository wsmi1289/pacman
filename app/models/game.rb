class Game < ApplicationRecord
  after_create :initialize_game!

  has_many :spaces
  has_many :ghosts

  def initialize_game!
    create_board
    Pacman.create(space: {row: 11, column: 8}, dirX: null, dirY: null, color: null)
    Ghost.create(space: {row: 7, column: 6}, dirX: null, dirY: null, color: 'blue')
    Ghost.create(space: {row: 9, column: 6}, dirX: null, dirY: null, color: 'pink')
    Ghost.create(space: {row: 7, column: 8}, dirX: null, dirY: null, color: 'red')
    Ghost.create(space: {row: 9, column: 8}, dirX: null, dirY: null, color: 'yellow')
  end

  private

  def create_board
    for (var i = 0; i <= 20; i++) {
      for (var j = 0; j <= 14; j++) {
        Space.create(row: i, column: j);
      }
    }
  end
end
