var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Station Model
 * ==========
 */
var Station = new keystone.List('Station');

Station.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Station.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */
Station.defaultColumns = 'name, email, isAdmin';
Station.register();
