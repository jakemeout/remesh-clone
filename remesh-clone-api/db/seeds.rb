# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Conversation.destroy_all
Message.destroy_all
Thought.destroy_all

Conversation.create(title: 'First Conversation of Many', start_date: DateTime.now)
Conversation.create(title: 'Second Conversation', start_date: DateTime.now)
Conversation.create(title: 'Third Conversation', start_date: DateTime.now)

Message.create(text: 'Hey', date_sent: DateTime.now, conversation_id: 1)
Message.create(text: 'Hi', date_sent: DateTime.now, conversation_id: 1)
Message.create(text: 'Whats up?', date_sent: DateTime.now, conversation_id: 2)
Message.create(text: 'Whats going on?', date_sent: DateTime.now, conversation_id: 2)
Message.create(text: 'Dunno', date_sent: DateTime.now, conversation_id: 3)
Message.create(text: 'You?', date_sent: DateTime.now, conversation_id: 3)
Message.create(text: 'Weirdness', date_sent: DateTime.now, conversation_id: 2)

Thought.create(text: 'Interesting', date_sent: DateTime.now, message_id:1)
Thought.create(text: 'Not so interesting', date_sent: DateTime.now, message_id:2)
Thought.create(text: 'Poignent', date_sent: DateTime.now, message_id:3)
Thought.create(text: 'Terrifying', date_sent: DateTime.now, message_id:1)

Thought.create(text: 'Interesting', date_sent: DateTime.now, message_id:2)
Thought.create(text: 'Not so interesting', date_sent: DateTime.now, message_id:2)
Thought.create(text: 'Poignent', date_sent: DateTime.now, message_id:3)
Thought.create(text: 'Terrifying', date_sent: DateTime.now, message_id:1)