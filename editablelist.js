(function($) {
	$.extend({
		editableList: new function() {
			var new_options = {};
			function rebindKeys(el) {
				$(el).each(function(i,e){
					$(e).keyup(function(event){
						if(event.which == '13'){
							$(this).after('<li><span class="move-handle">#</span><input type="text" value="" placeholder="Add a new item"/></li>');
							rebindKeys($(this).next("li"));
							$(this).next().find("input").focus();
						} else if (event.which == '8') {
							$(this).prev().find("input").focus();
							$(this).remove();
						}
					});
					$(e).change(new_options.onChange);
				});
			}

			function toArray(element) {
				var out = [];
				$(element).find("input").each(function(i,e){
					out[i] = $(e).val();
				});
				return out;
			}

			this.construct = function(options) {
				if (options && typeof(options) == 'object') {
					new_options = $.extend({
							onChange: function() {}
						}, options);
				}

				if (options && typeof(options) == 'string') {
					if (options == 'toArray') {
						return toArray(this);
					}
				} else {
						return this.each(function(){
							var idix = $(this).attr("id");

							$(this).find("li").each(function(i,e){
								$(e).html('<span class="move-handle">#</span><input type="text" value="'+$(e).text()+'"/>');
								rebindKeys(e);

							});

							$(this).sortable({
								stop: new_options.onChange
							});


							// add button
							$(this).append('<li class="add_item"><button class="btn btn-default btn-sm" id="' + idix + '_add">Add item</button></li>');
							$("#"+idix+"_add").click(function(){
								$(this).before('<li><span class="move-handle">#</span><input type="text" value="" placeholder="Add a new item"/></li>');
								rebindKeys($(this).prev("li"));
								});
						});
					}
			};
		}
	});

		$.fn.extend({
			editableList: $.editableList.construct
		});

}(jQuery));