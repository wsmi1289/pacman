class CreateSpaces < ActiveRecord::Migration[5.1]
  def change
    create_table :spaces do |t|
      t.integer  "row"
      t.integer  "column"
      t.integer  "size"
      t.timestamps
    end
  end
end
