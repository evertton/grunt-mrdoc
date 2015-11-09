# grunt-doxx

Doxx grunt plugin automatically generates the documentation for your project.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-doxx --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doxx');
```

## The "doxx" task

### Overview
In your project's Gruntfile, add a section named `doxx` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  doxx: {
    all: {
      src: 'src',
      target: 'docs',
      options: {
        // Task-specific options go here.
      }
    }
  },
});
```

### Options

#### options.ignore
Type: `String`
Default value: `'test,public,static,views,templates'`

A comma separated list of directories to ignore.

#### options.title
Type: `String`
Default value: `''`

The title for produced page.

#### options.target_extension
Type: `String`
Default value: `'html'`

Target files extension.

#### options.template
Type: `String`
Default value: ` `

The jade template file to use.

#### options.theme
Type: `String`
Default value: ` `

The theme to use.

#### options.readme
Type: `String`
Default value: `'README.md'`

The markdown file to use on the main page of the documentations.

### Usage Examples

#### Default Options
In this example, the default options are used to automatically generates documentation of files in `src` directory. The generated documentation is saved in target directory `docs`.

```js
grunt.initConfig({
  doxx: {
    all: {
      src: 'src',
      target: 'docs'
    }
  },
});
```

#### Custom Options
In this example, the custom options are used to change *title* and *template* of documentation page. The *ignore* option is used to prevent the documents generation for files in the directories: `examples` and `vendors`.

```js
grunt.initConfig({
  doxx: {
    custom: {
      src: 'src',
      target: 'docs',
      options: {
        title: 'Doxx',
        ignore: 'examples,vendors',
        template: 'templates/doxx.jade'
      },
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* **0.1.0**: Initial release

## License
Copyright (c) 2014 Evertton de Lima. Licensed under the [MIT license](http://evertton.mit-license.org).
