class Subreadit < ApplicationRecord
  belongs_to :user

  validates :title, :description, :owner, presence: true

  has_many :posts, dependent: :destroy
end
