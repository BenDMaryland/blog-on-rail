class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment_name
      t.string :comment_title
      t.belongs_to :blog

      t.timestamps
    end
  end
end
