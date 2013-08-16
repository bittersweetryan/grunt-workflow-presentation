var app = {	
	el : null,
	init : function( el ){

	},
	addEvent : function( eventObj ){
		var eventArr;

		for( var key in eventObj ){
			eventArr = key.split( ' ' );

			this.$(el).on( eventArr[ 0 ], eventArr[ 1 ], eventObj[ key ] );
		}
	},
	render : function(){
		return this.$( el ).html();
	}
};

$(function(){
	app.init();
});