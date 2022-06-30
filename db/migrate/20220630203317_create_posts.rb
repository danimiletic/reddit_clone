class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :user_name
      t.string :post_title
      t.string :post_content
      t.string :image
      t.text :url
      t.belongs_to :subreadit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
