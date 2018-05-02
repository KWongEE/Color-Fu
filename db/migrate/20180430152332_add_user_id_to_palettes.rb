class AddUserIdToPalettes < ActiveRecord::Migration[5.2]
  def change
    add_column :palettes, :user_id, :integer
  end
end
