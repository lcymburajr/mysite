class ProjectsController < ApplicationController
  before_filter :require_login

  def index
    @project = Project.all.order("updated_at DESC")
    @active_nav = false
  end

  def show
    @project = Project.find(params[:id])
    @active_nav = false
  end

  def new
    @project = Project.new
    @active_nav = false
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      flash[:notice] = "Success!"
      redirect_to projects_path
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
    @active_nav = false
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      flash[:notice] = "Updated!"
      redirect_to projects_path
    else
      render :edit
    end
  end

  def destroy
    Project.find(params[:id]).destroy
    flash[:notice] = "Deleted!"
    redirect_to projects_path
  end

  private

    def project_params
      params.require(:project).permit(:title, :description, :second_description, :image, :link)
    end

    def require_login
      unless current_user
        redirect_to login_url
      end
    end

end
