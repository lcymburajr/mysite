class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      # Log the user in and redirect to the user's show page.
      log_in user
      redirect_to projects_path
    else
      # Create an error message.
      flash.now[:notice] = 'Invalid email/password combination'
      render :new
    end
  end

  def destroy
    log_out
    redirect_to login_path
  end
end