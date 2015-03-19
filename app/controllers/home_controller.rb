class HomeController < ApplicationController
  def index
  	file = File.read('public/projects.json')
  	data = JSON.parse(file)
  	@projects = data['projects']

  	@time = Time.new
  	@contact_form = ContactForm.new
  end

  	def new
      @contact_form = ContactForm.new
    end

    def create
      begin
        @contact_form = ContactForm.new(params[:contact_form])
        @contact_form.request = request
        if @contact_form.deliver
          redirect_to root_path
          flash[:notice] = 'Thank you for your message!'
        else
          redirect_to root_path
        end
      rescue ScriptError
        flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
      end
    end

end
