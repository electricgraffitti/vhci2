Vhci2::Application.routes.draw do

  # Verisk Pages
  match 'payment_accuracy' => 'payment_accuracy#home', :as => :home
  match 'claims_editing' => 'payment_accuracy#claim_editing', :as => :claim_editing
  match 'fraud_prevention' => 'payment_accuracy#fraud_prevention', :as => :fraud_prevention
  match 'bill_review' => 'payment_accuracy#bill_review', :as => :bill_review
  match 'about_us' => 'payment_accuracy#about_us', :as => :about_us
  match 'nucleus' => 'payment_accuracy#nucleus', :as => :nucleus
  match 'more_info' => 'payment_accuracy#more_info', :as => :more_info
  match 'thank-you' => 'payment_accuracy#thank_you', :as => :thank_you

  # Default Path
  root :to => "payment_accuracy#home"

end
