class Subreadit < ApplicationRecord
  belongs_to :user

  validates :title, :description, :owner, presence: true
end
