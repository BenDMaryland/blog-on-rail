class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment_name, :comment_title, :blog_id
end
