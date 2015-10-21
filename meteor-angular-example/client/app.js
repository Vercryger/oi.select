angular.module('devtags', ['angular-meteor', 'oi.select']);

angular.module('devtags').controller('TagsCtrl',function () {
  this.tags =  ['java', 'javascript', 'groovy', 'ruby', 'html'];
  this.my_tags= ['groovy'];
});