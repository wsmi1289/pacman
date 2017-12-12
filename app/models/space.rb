class Space < ApplicationRecord
  def initialize(row, column, size)
    @row = row
    @column = column
    @size = 50
  end
end
