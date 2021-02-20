class CreateThoughts < ActiveRecord::Migration[6.0]
  def change
    create_table :thoughts do |t|
      t.string :text
      t.string :date_sent
      t.integer :message_id

      t.timestamps
    end
  end
end
