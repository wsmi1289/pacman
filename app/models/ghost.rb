class Ghost < Man
  def initialize(color)
    super()
    @color = color
  end
  

  private

  def random_move
    num = rand(1..4)
    case num
    when 1
      self.right
    when 2
      self.left
    when 3
      self.up
    when 4
      self.down
  end

  
end