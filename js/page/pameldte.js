var UKMpameldte = function( filterList ){
	var groups = new Map( null );

	var self = {
		registergroup: function( group ) {
			groups.set( group, new Map( null ) );
			var keys = Array.from( groups.keys() );
			var groupList = keys.join('|');
			$('.filter').each( function(){
				$(this).attr('data-filters', groupList);
			});
		},
		
		registerFilter: function( group, filterId) {
			if( self.hasGroup( group ) ) {
				var filter = new UKM.filter( group, filterId );
				filter.init();
				groups.get( group ).set( filterId, filter );
			}
		},
		
		click: function( group, filterId ) {
			if( self.hasFilter( group, filterId ) ) {
				var filter = groups.get( group ).get( filterId );
				var state = filter.click();
				
				if( state == 'hide' ) {
					// HVIS INGEN FILTER ER VALGT, SKAL ALLE ELEMENTER VISES
					var noneSelected = true;
					groups.get( group ).forEach( function( filter ){
						if( filter.isVisible() ) {
							noneSelected = false;
							return;
						}
					});
					
					if( noneSelected ) {
						groups.get( group ).forEach( function( filter ){
							$( filter.getListSelector() ).each( function(){
								$(this).attr('filter-'+ filter.getGroup() +'-show', true);
							});
						});
						filter = null;
					}
				} else {
					// HVIS FØRSTE FILTER ER VALGT MÅ VI KONTROLLERE STATUS PÅ NYTT
					// PÅ GRUNN AV "INGEN FILTER VALGT"-FUNKSJONEN
					var numSelected = 0;
					groups.get( group ).forEach( function( filter ){
						if( filter.isVisible() ) {
							numSelected++;
							if( numSelected > 2 ) {
								return;
							}
						}
					});

					if( numSelected == 1 ) {
						groups.get( group ).forEach( function( _filter ){
							$( _filter.getListSelector() ).each( function(){
								$(this).attr('filter-'+ _filter.getGroup() +'-show', false);
								$(this).addClass('d-none');
							});
						});
						filter.show();
					}
					
				}
				self.updateList( filter );
			} else {
				
			}
		},
		
		hasGroup: function( group ) {
			if( groups.has( group ) ) {
				return true;
			}
			//console.warn('Sorry, group #'+ group +' does not exist');
			return false;
		},
		
		hasFilter: function( group, filterId ) {
			if( self.hasGroup( group ) ) {
				if( groups.get( group ).has( filterId ) ) {
					return true;
				}
				//console.warn('Sorry, group #'+ group +' does not have the filter #'+ filterId );
			}
		},
		
		updateList: function( filter ){
			if( filter == null ) {
				var filterAffectedElements = filterList +' .filter';
			} else {
				var filterAffectedElements = filterList +' '+ filter.getListSelector();
			}
			$( filterAffectedElements ).each( function(){
				var listElement = $(this);
				var filters = listElement.attr('data-filters').split('|');
				var foundHideFilter = false;

				if( filter != null ) {
					$( this ).attr('filter-'+ filter.getGroup() +'-show', filter.isVisible());
				}
				
				filters.forEach( function( filter ) {
					var filterStatus = 'filter-'+ filter +'-show';
					if( listElement.attr( filterStatus ) == 'false' ) {
						foundHideFilter = true;
					}
				});
				if( !foundHideFilter ) {
					listElement.removeClass('d-none');
				}
			});
			
			self.showCount();
		},
		
		showCount: function(){
			var numShown = $(filterList +' .filter:visible').length;
			$('#innslagCount').html('Viser '+ numShown +' innslag');
			if( numShown == 0 ) {
				self.showNoneFound();
			} else {
				self.hideNoneFound();
			}
		},
		
		showNoneFound: function(){
			$('#searchListNoneFound').fadeIn(200);
		},

		hideNoneFound: function(){
			$('#searchListNoneFound').hide();
		},		
	};
	
	return self;
}('#searchList');


/**
 * REGISTER GUI HOOKS
**/
$(document).on('click', '.filterKategori', function(){
	UKMpameldte.click( 'kategori', $(this).attr('data-id') );
	$(this).blur();
});
$(document).on('click', '.filterFylke', function(){
	UKMpameldte.click( 'fylke', $(this).attr('data-id') );
	$(this).blur();
});


/**
 * LOAD FILTERS AND FILTER GROUPS
**/
$(document).ready( function(){
	UKMpameldte.showCount();
	UKMpameldte.registergroup('kategori');

	$('.filterKategori').each( function(){
		UKMpameldte.registerFilter('kategori', $(this).attr('data-id'));
	});

	UKMpameldte.registergroup('fylke');
	$('.filterFylke').each( function(){
		UKMpameldte.registerFilter('fylke', $(this).attr('data-id'));
	});

});


/**
 * GUI STUFF
**/
$(document).on('click', '.toggleFilters', function(e){
	e.preventDefault();
	if( $('#filters').is(':visible') ) {
		$('#filters').slideUp();
	} else {
		$('#filters').slideDown();
	}
});


$(document).on('keyup', '#filterInnslag', function() {
	var words = $(this).val().toLowerCase().split(' ');
//	var rex = new RegExp( '\\b' + $(this).val(), 'gi');
	$('#searchList .filter').hide();
	$('#searchList .filter').filter(function() {
		var searchIn = $(this).attr('data-filter').toLowerCase();
		var found = false;
		
		words.forEach( function( word ) {
			if( searchIn.indexOf( word ) !== -1 ) {
				found = true;
				return;
			}
		});
		
		return found;
	}).show();
	
	UKMpameldte.showCount();
});