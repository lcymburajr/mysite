class HomeController < ApplicationController
  def index
  	file = File.read('public/projects.json')
  	data = JSON.parse(file)
  	@projects = data['projects']

  	@time = Time.new
  end
end
