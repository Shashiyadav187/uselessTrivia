var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ModelSchema = new mongoose.Schema({
	order: [{type: Schema.ObjectId, ref: "Order"}],
	name: String,
	image_url: String,
	description: String,
	inventory: Number,
	created_at: Date
});

mongoose.model('Model', ModelSchema);