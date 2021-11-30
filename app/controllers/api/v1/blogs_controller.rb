
module Api
    module V1
         class BlogsController < ApplicationController
           protect_from_forgery with: :null_session
            def index
                blogs = Blog.all

                render json: BlogSerializer.new(blogs, options).serialized_json
            end

            def show 
                blog = Blog.find_by_slug( params[:id])
                render json: BlogSerializer.new(blog, options).serialized_json
            end

            def create 
                blog = Blog.new(blog_params)
                
                byebug
                
                if blog.save
                    render json: BlogSerializer.new(blog).serialized_json
                else
                    render json: {error: blog.error.message}
                end
            end

            def update 
                blog = Blog.find_by(slug: params[:id])

                if blog.update(blog_params)
                    render json: BlogSerializer.new(blog, options).serialized_json
                else
                    render json: {error: blog.error.message}
                end
            end

            def destroy 
                blog = Blog.find_by(slug: params[:id])

                if blog.destroy
                    head :no_content
                else
                    render json: {error: blog.error.message}
                end
            end


            private

            def blog_params
                params.require(:blog).permit(:blog_post, :blog_title, :image_url)
            end

            def options 
                @options  ||= {include: %i[comments]}
            end


        end
    end
end
