class Blog < ApplicationRecord
    has_many :comments

before_create :slugify
def slugify 
self.slug = blog_title.parameterize 

end

end
