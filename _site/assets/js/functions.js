function clearFilters(){
  $(".closing-icon").remove();
  $(".active_tag").removeClass('active_tag');
  $('.card').show();
}

function showContactForm(){

}

function new_tab_show_callback() {
    console.log('showing tab +++++ ' + instance_tabs.index)
}

var instance_tabs

function materialize_init_tab() {

    elem = $('.tabs')

    options = {
        duration: 600,
        onShow: new_tab_show_callback
    }
    init_tabs = M.Tabs.init(elem, options);
    instance_tabs = M.Tabs.getInstance(elem);
}

function toggleTags(button, tag){
  if(button.attr('class').indexOf('active_tag') > -1){
    button.removeClass("active_tag");
    button.html(tag);
  } else {
    button.html(tag + '<i class="material-icons left closing-icon">close</i>');
    button.addClass("active_tag");
  }
}

function addActiveTags(buttons){
  var active_tags = [];
  for(var j=0; j < buttons.length; j++){
    current_button = $(buttons[j]);
    if(current_button.attr('class').indexOf('active_tag') > -1){
      active_tags.push(current_button.attr('val'));
    }
  }
  return active_tags;
}

function showProjects(projects, active_tags){
  projects.each(function(i){
    var project = $(projects[i]);
    project.hide();

    $.each(active_tags, function(k){
      var active_tag = active_tags[k],
      projectContainsTag = project.attr('tags').indexOf(active_tag) > -1;

      if(projectContainsTag){
        project.show();
      }
    })
  })

  var activeTagsAreEmpty = active_tags.length === 0;

  if(activeTagsAreEmpty){
    projects.show();
  }
}

function hideCloseIcons(element){
  element.children().remove('i');
}

function assignColors(pagename, color){
  // debugger
  $('body').css('background-color', color);
  $('.card-action a').css('color', color);
  // debugger
  $('.nav-wrapper').css('background-color', color);
  $("a:contains('" + pagename + "')").parent().css('background-color', color);
  $("a:contains('" + pagename + "')").css('color', "white");
}
$(function() {

	var $bars = $( ".skillbar-bar" ),
		total = $bars.length,
		index = -1,
		timer = null,
		select = function( i ) {
			var $bar = $bars.eq( i );
			$bar.css( "width", $bar.parent().data( "percent" ) );
			$bar.parent().addClass( "complete" );
		},
		action = function() {
			index++;
			if( index == total - 1 ) {
				clearTimeout( timer );
			}
			select( index );
			setTimeout( action, 500 );

		};


	timer = setTimeout( action, 500 );

});
