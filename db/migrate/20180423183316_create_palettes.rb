class CreatePalettes < ActiveRecord::Migration[5.2]
  def change
    create_table :palettes do |t|

      t.string :title, null: false
      t.text :description
      t.string :hexcode

      t.timestamps
    end
  end
end
