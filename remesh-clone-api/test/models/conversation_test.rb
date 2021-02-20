require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should not save conversation without title" do
    conversation = Conversation.new
    assert_not conversation.save, "Saved the conversation without a title"
  end

  test "should be able to create and query a single conversation" do
    conversation = Conversation.create(title: 'TEST INPUT', start_date: DateTime.now)
    conversation_id = Conversation.first.id
    query_convo =  Conversation.find_by(id: conversation_id)

    assert conversation_id == query_convo.id , "Conversations returned a result"
  end


end
