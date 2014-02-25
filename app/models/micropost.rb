class Micropost < ActiveRecord::Base
  CHAR_LIMIT = 140
  belongs_to :user
  default_scope -> { order('created_at DESC') }
  validates :content, presence: true, length: { maximum: CHAR_LIMIT }
  validates :user_id, presence: true
end
