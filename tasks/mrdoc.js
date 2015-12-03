/*
 * grunt-mrdoc
 * https://github.com/evertton/grunt-mrdoc
 *
 * Copyright (c) 2014-2015 Evertton de Lima
 * Licensed under the MIT license.
 * http://evertton.mit-license.org
 */

var exec = require('child_process').exec,
	path = require('path'),
	rimraf = require('rimraf');

module.exports = function(grunt) {

	grunt.registerMultiTask('mrdoc', 'Generate your docs with Mr. Doc', function() {
                var done = this.async();
		var pluginPath = path.resolve(__dirname, '../../'),
			src = this.data.src,
			target = this.data.target,
			_opts = this.options(),
			_args = [];

		_args.add = function (arg1, arg2) {
			_args.push(arg1);
			_args.push(arg2);
		};

		var formatter = [pluginPath, 'node_modules', '.bin', 'mr-doc'].join(path.sep);

		rimraf.sync(target);

		_args.add('--source', src);
		_args.add('--output', target);

		if(_opts.ignore) {
			_args.add('--ignore', _opts.ignore);
		}

		if(_opts.title) {
			_args.add('--name', '"' + _opts.title + '"');
		}

		if(_opts.target_extension) {
			_args.add('--extension', _opts.target_extension);
		}

		if(_opts.template) {
			_args.add('--template', _opts.template);
		}

		if (_opts.theme) {
			_args.add('--theme', _opts.theme);
		}

		if(_opts.readme) {
			_args.add('--readme', _opts.readme);
		}

		delete _args.add;

		exec(formatter + ' ' + _args.join(' '), {maxBuffer: 5000*1024}, function(error, stout, sterr) {
			if(error) {
				grunt.log.error('ERROR: ' + error);
			}

			if(!error) {
				grunt.log.ok('Docs generated!');
				done();
			}
		});

	});

};
