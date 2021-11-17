class BlogSerializer
  include FastJsonapi::ObjectSerializer  
  attributes :blog_title, :blog_post, :image_url, :slug



  has_many :comments
end

