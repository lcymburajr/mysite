class HomeController < ApplicationController
  def index
  	# file = File.read('public/projects.json')
  	# data = JSON.parse(file)
  	# @projects = data['projects']

    @Projects = Project.all

    @about = About.first

    @lang = About.find(2)

    @active_nav = true

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
          redirect_to '/'
          flash[:notice] = 'Thank you for your message!'
        else
          redirect_to '/'
        end
      rescue ScriptError
        flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
      end
    end

end
