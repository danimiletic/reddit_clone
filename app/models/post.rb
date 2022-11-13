class Post < ApplicationRecord
  belongs_to :subreadit
  has_many :comments

  validates :user_name, :post_title, :post_content, :image, :url, presence: true
end
