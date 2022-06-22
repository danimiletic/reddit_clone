class Api::SubreaditsController < ApplicationController
  # COMING BACK TO BELOW CODE
  # before_action :set_subreadit, only: [:show, :update, :destroy]
  def index 
    render json: Subreadit.all
  end

  def show
    @subreadit = Subreadit.find(params[:id])
      render json: @subreadit 
  end

  def create 
    @subreadit = Subreadit.new(subreadit_params)
      if @subreadit.save
        render json: @subreadit
      else
        render json: { erorrs: @subreadit.errors }, status: :unprocessable_entity
      end
  end

  def update 
    @subreadit = Subreadit.find(params[:id])
    if @subreadit.update(subreadit_params)
      render json: @subreadit
    else
      render json: { errors: @subreadit.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @subreadit = Subreadit.find(params[:id])
    @subreadit.destroy
    render json: { message: 'subreadit deleted' }
  end
  
  private 
    def subreadit_params
      params.require(:subreadit).permit(:title, :description, :owner)
    end
    # COMING BACK TO BELOW CODE
    # def set_platform
    #   @subreadit = 
    # end
end
