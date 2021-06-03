var UKM = UKM || {};

UKM.filter = function( group, id ){
	var name;
	var selector = '#'+ group + '-' + id;
	var listSelector = '.filter-'+ group +'-'+ id;
	
	var self = {
		init: function() {
			name = $( selector ).html();
			// Always init as showing
			$( listSelector ).attr('filter-'+ group +'-show', true );
		},
		
		getGroup: function(){
			return group;
		},
		getId: function(){
			return id;
		},
		getSelector: function(){
			return selector;
		},
		
		getListSelector: function(){
			return listSelector;
		},
		
		getName: function(){
			return name;
		},
		
		isVisible: function() {
			return $( selector ).attr('data-show') == 'true';
		},
		
		show: function(){
			$( selector ).attr('data-show', true);
			$( selector ).addClass('btn-primary').removeClass('btn-outline-primary');
		},
		hide: function(){
			$( selector ).attr('data-show', false);
			$( selector ).addClass('btn-outline-primary').removeClass('btn-primary');
			$( listSelector ).addClass('d-none');
		},
		
		click: function(){
			//console.warn('Don\'t you dare do that again!');	
			if( self.isVisible() ) {
				self.hide();
				return 'hide';
			} else {
				self.show();
				return 'show';
			}
		},
	};
	
	return self;
}