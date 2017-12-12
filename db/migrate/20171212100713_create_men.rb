class CreateMen < ActiveRecord::Migration[5.1]
  def change
    create_table :men do |t|
      t.integer :row
      t.integer :column
      t.integer :dirX
      t.integer :dirY
      t.integer :lives
      t.string :type
      t.string :color

      t.timestamps
    end
  end
end
