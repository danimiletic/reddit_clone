class Api::CommentsController < ApplicationController
  before_action :set_post
  before_action :set_comment, only: [:show, :update, :destroy]

  def index 
    render json: @post.comments
  end

  def show 
    render json: @comment
  end

  def create 
    @comment = @post.comments.new(comment_params)
    if @comment.save
      render json: @comment
    else 
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: { errors: @comment.errors }, status: unprocessable_entity
    end
  end

  def destroy
    @comment.destroy
    render json: { message: "Comment was deleted" }
  end

  private 
    def comment_params
      params.require(:comment).permit(:user_handle, :user_comment)
    end

    def set_comment
      @comment = @post.comments.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end
end
