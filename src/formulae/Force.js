projFormula.Force = {

	nextId: 0,

	collection: [],

	dictionary: {},

	factory: function( force, mass, acceleration ) {

		// Parameter Handlers

		var id = this.nextId;

		this.nextId++;

		// Instance Builder

		var instance = {

			id: id,

			force: force,

			mass: mass,

			acceleration: acceleration

		}

		// Instance Registering

		this.collection.push( instance );

		this.dictionary[ id ] = instance;

		return instance;

	},

	injectHtml: function( instance ) {

		var id = instance.id;

		strHtml = 

		"<div id='force-force-" + id + "'class='formula'>"
			 + instance.force + 
		"</div> = <div id='force-mass-" + id + "'class='formula'>"
			+ instance.mass +
		"</div> * <div id='force-acceleration-" + id + "'class='formula'>" 
			+ instance.acceleration + 
		"</div>";

		return strHtml;

	},

	calculateForce: function( instance ) {

		// force = mass * acceleration
		return instance.mass * instance.acceleration;

	},
	calculateMass: function( instance ) {

		// mass = force / acceleration
		return instance.force / instance.acceleration;

	},
	calculateAcceleration: function( instance ) {

		// acceleration = force / mass
		return instance.force / instance.mass;

	}

}