class RemoveSubreadits < ActiveRecord::Migration[6.1]
  def change
    drop_table :subreadits
  end
end
