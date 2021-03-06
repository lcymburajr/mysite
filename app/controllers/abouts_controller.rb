class AboutsController < ApplicationController
  before_filter :require_login

  def index
    @about = About.all
    @active_nav = false
  end

  def show
    @about = About.find(params[:id])
    @active_nav = false
  end

  def new
    @about = About.new
    @active_nav = false
  end

  def create
    @about = About.new(about_params)
    if @about.save
      flash[:notice] = "Success!"
      redirect_to abouts_path
    else
      render :new
    end
  end

  def edit
    @about = About.find(params[:id])
    @active_nav = false
  end

  def update
    @about = About.find(params[:id])
    if @about.update_attributes(about_params)
      flash[:notice] = "Updated!"
      redirect_to abouts_path
    else
      render :edit
    end
  end

  def destroy
    About.find(params[:id]).destroy
    flash[:notice] = "Deleted!"
    redirect_to abouts_path
  end

  private

    def about_params
      params.require(:about).permit(:title, :description, :second_description, :document)
    end

    def require_login
      unless current_user
        redirect_to login_url
      end
    end

end
