/*
 * grunt-doxx
 * https://github.com/evertton/grunt-doxx
 *
 * Copyright (c) 2014 Evertton de Lima
 * Licensed under the MIT license.
 * http://evertton.mit-license.org
 */

var exec = require('child_process').exec,
	fs = require('fs'),
	path = require('path'),
	rimraf = require('rimraf');

module.exports = function(grunt) {

	grunt.registerMultiTask('doxx', 'Generate your docs with Doxx.', function() {
                var done = this.async();
		var pluginPath = path.resolve(__dirname, '../'),
			src = this.data.src,
			target = this.data.target,
			_opts = this.options(),
			_args = [];

		_args.add = function (arg1, arg2) {
			_args.push(arg1);
			_args.push(arg2);
		};

		var formatter = [pluginPath, 'node_modules', '.bin', 'doxx'].join(path.sep);

		rimraf.sync(target);

		_args.add('--source', src);
		_args.add('--target', target);

		if(_opts.ignore) {
			_args.add('--ignore', _opts.ignore);
		}

		if(_opts.title) {
			_args.add('--title', '"' + _opts.title + '"');
		}

		if(_opts.target_extension) {
			_args.add('--target_extension', _opts.target_extension);
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
