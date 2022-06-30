class Api::SubreaditsController < ApplicationController
  before_action :set_subreadit, only: [:show, :update, :destroy]

  def index 
    render json: current_user.subreadits
  end

  def show
    render json: @subreadit
  end

  def create
    @subreadit = current_user.subreadits.new(subreadit_params)
    if @subreadit.save
      render json: @subreadit
    else
      render json: { errors: @subreadit.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @subreadit.update(subreadit_params)
      render json: @subreadit
    else
      render json: { errors: @subreadit.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @subreadit.destroy
    render json: { message: "Subreadit deleted" }
  end

  private 

  def subreadit_params
    params.require(:subreadit).permit(:title, :description, :owner)
  end

  def set_subreadit
    @subreadit = current_user.subreadits.find(params[:id])
  end
end
