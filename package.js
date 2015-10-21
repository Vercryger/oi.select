var packageName = 'vercryger:oi.select';
var where = 'client'; 
var version = '0.2.19';
var summary = 'AngularJS directive of select element';
var gitLink = 'https://github.com/Vercryger/oi.select';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies

  api.addFiles([
    'src/select.css',
    'src/select.js'
  ], where); // Files in use
});   