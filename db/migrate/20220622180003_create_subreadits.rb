class CreateSubreadits < ActiveRecord::Migration[6.1]
  def change
    create_table :subreadits do |t|
      t.string :title
      t.string :description
      t.string :owner

      t.timestamps
    end
  end
end
