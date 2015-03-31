class DocumentsController < ApplicationController
  def index
  end

  # @http_method XHR POST
  # @url /documents
  def create
    @document = current_user.documents.create(user_params)
  end

  private
  ## Strong Parameters
  def user_params
    params.require(:current_user).permit(:document)
  end
end
