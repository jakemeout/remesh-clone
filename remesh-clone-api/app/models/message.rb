class Message < ApplicationRecord
    validates :text, presence: true

    belongs_to :conversation
    has_many :thoughts
end
