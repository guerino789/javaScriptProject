class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.string :item
      t.string :brand
      t.string :model 
      t.integer :price
      t.integer :computer_id
      t.timestamps
    end
  end
end
