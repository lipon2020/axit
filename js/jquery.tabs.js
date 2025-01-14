jQuery.fn.tabs = function(control){
  var element = $(this);
  control = $(control);

  element.delegate('li', 'click', function(e){
    e.preventDefault();
    // Retrieve tab name
    var tabName = $(this).data('tab');

    // Fire custom event on tab click 
    element.trigger('change.tabs', tabName);
                
  }); 

  // Bind to custom event
  element.bind('change.tabs', function(e, tabName){
    element.find('li').removeClass('active');                                                                                                                             
    element.find('>[data-tab="' + tabName + '"]').addClass('active');
  }); 

  // Bind to custom event
  element.bind('change.tabs', function(e, tabName){
    control.find('>[data-tab]').removeClass('active');
    control.find('>[data-tab="' + tabName + '"]').addClass('active');
  }); 

  // Activate first tab
  var firstName = element.find('li:first').data('tab');
  element.trigger('change.tabs', firstName);

  return this; 
};