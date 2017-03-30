var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Passenger Model
 * ==========
 */
var Passenger = new keystone.List('Passenger');

Passenger.add({
	name: { type: Types.Name, required: true, index: true },
	station: { type: Types.Relationship, ref: 'Station' },
	train: { type: Types.Relationship, ref: 'Train' },
	destination: {type: Types.Relationship, ref: 'Station'},
	ticket: { type: Boolean, intial: false, index: true }
});

// Provide access to Keystone
Passenger.schema.virtual('canAccessKeystone').get(function () {
	return this.ticket;
});


/**
 * Registration
 */
Passenger.defaultColumns = 'name, station, train, destination, ticket';
Passenger.register();
