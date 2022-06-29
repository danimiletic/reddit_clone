class FixDiscriptionColumnTypoInSubreaditsTable < ActiveRecord::Migration[6.1]
  def up
    rename_column :subreadits, :desciprtion, :description
  end

  def down
    rename_column :subreadits, :description, :desciprtion
  end
end
