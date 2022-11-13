class Comment < ApplicationRecord
  belongs_to :post

  validates :user_handle, :user_comment, presence: true
end
