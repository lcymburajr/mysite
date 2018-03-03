class HomeController < ApplicationController
  def index
  	# file = File.read('public/projects.json')
  	# data = JSON.parse(file)
  	# @projects = data['projects']

    @projects = Project.all.order("updated_at DESC")

    @about = About.find_by_title('ABOUT')

    @code = About.find_by_title('LANGUAGE')

    @frameworks = About.find_by_title('AWS')

    @knowledge = About.find_by_title('AUTOMATION/WORKFLOWS')

    @award= About.find_by_title('AWARD')

    @resume = About.find_by_title('RESUME')

    @active_nav = true

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
        flash[:success] = 'Thank you for your message!'
      else
        redirect_to '/'
      end
    rescue ScriptError
      flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
    end
  end
end
