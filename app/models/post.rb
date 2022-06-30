class Post < ApplicationRecord
  belongs_to :subreadit

  validate :user_name, :post_title, :post_content, :image, :url, presence: true
end
