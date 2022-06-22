class Subreadit < ApplicationRecord

  validates :title, :description, :owner, presence: true 
end
