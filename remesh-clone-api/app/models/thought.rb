class Thought < ApplicationRecord
    validates :text, presence: true
    belongs_to :message
end
