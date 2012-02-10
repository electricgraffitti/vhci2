module ApplicationHelper
  
  def page_title(page_title)
    content_for(:title) { page_title }
  end
  
  def meta_keywords(meta_keywords)
    content_for(:keywords) {meta_keywords}
  end
  
  def meta_description(meta_description)
    content_for(:description) {meta_description}
  end

  def clear
  	content_tag(:div, '', :class => "clear")
  end
  
  # banner get a demo button
  def demo
     link_to "Request Demo", more_info_path, :class => "button banner_button", :title => "Request Demo"
  end
  
end
