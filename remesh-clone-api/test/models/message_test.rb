require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should not save message without text" do
    message = Message.new
    assert_not message.save, "Saved the message without text"
  end


  test "should be able to create and query a single conversation" do
    message = Message.create(text: 'TEST TEXT', date_sent: DateTime.now)
    message_id = Message.first.id
    query_message =  Message.find_by(id: message_id)
    
    assert message_id == query_message.id , "Message returned a result!!"
  end

end
