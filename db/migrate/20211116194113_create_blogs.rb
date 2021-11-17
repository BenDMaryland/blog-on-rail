class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :blog_title
      t.string :image_url
      t.string :slug
      t.text :blog_post

      t.timestamps
    end
  end
end
