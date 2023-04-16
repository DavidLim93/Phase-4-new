class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :game_id, foreign_key: true
      t.string :title
      t.string :description
    end
  end
end
