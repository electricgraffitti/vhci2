class ApplicationController < ActionController::Base
  
  
  before_filter :redirect_to_vh
  
  protect_from_forgery
  
  
  private
  
  def redirect_to_vh
    redirect_to "http://www.veriskhealth.com"
  end
end
