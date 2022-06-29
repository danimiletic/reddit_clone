class CreateSubreadits < ActiveRecord::Migration[6.1]
  def change
    create_table :subreadits do |t|
      t.string :title
      t.string :desciprtion
      t.string :owner
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
