<html>
<script src="//www.parsecdn.com/js/parse-1.6.14.min.js"></script>
Parse.initialize("YOUR_APP_ID");
Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
