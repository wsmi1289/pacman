class Man < ApplicationRecord
  attr_accessor :space, :dirX, :dirY
  def initialize(space, dirX, dirY)
    @space = Space.create(space)
    @dirX = dirX
    @dirY = dirY
  end
end
