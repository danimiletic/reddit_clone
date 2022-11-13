class Api::PostsController < ApplicationController
  before_action :set_subreadit
  before_action :set_post, only: [:show, :update, :destroy]


  def index
    render json: @subreadit.posts
  end

  def show
    render json: @post
  end

  def create
    @post = @subreadit.posts.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: { message: 'Post Deleted'}
  end

  private 
    def post_params
      params.require(:post).permit(:user_name, :post_title, :post_content, :image, :url)
    end

    def set_subreadit
      @subreadit = Subreadit.find(params[:subreadit_id])
    end
    
    def set_post 
      @post = @subreadit.posts.find(params[:id])
  end
end
