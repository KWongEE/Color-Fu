class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :review
      t.belongs_to :user
      t.belongs_to :palette

      t.timestamps
    end
  end
end
