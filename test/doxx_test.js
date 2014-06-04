var grunt = require('grunt');

exports.doxx = {
	setUp: function(done) {
		done();
	},
	helper: function(test) {
		test.expect(1);
		test.ok(true);
		test.done();
	}
};
