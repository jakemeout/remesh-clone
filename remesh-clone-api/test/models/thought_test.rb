require 'test_helper'

class ThoughtTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should not save message without text" do
    thought = Thought.new
    assert_not thought.save, "Saved the thought without text"
  end


  test "should be able to create and query a single conversation" do
    thought = Thought.create(text: 'TEST TEXT', date_sent: DateTime.now)
    thought_id = Thought.first.id
    query_thought =  Thought.find_by(id: thought_id)
    
    assert thought_id == query_thought.id , "Message returned a result!!"
  end

end
