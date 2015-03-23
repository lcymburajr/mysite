class ProjectsController < ApplicationController
  before_filter :require_login

  def index
    @project = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      flash[:notice] = "success!"
      redirect_to @project
    else
      render :new
    end
  end

  def edit
    @project = Project.find(params[:id])
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      flash[:notice] = "Profile updated"
      redirect_to @project
    else
      render :edit
    end
  end

  def destroy
    Project.find(params[:id]).destroy
    flash[:notice] = "site deleted"
    redirect_to projects_path
  end

  private

    def project_params
      params.require(:project).permit(:title, :description, :image, :link)
    end

    def require_login
      unless current_user
        redirect_to login_url
      end
    end

end