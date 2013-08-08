**Deferred** is used to postpone the action untill something is done. Packages like dojo/request use dojo/Deferred class to return a promise that gets resolved when the asynchronous thread is complete.   
To trigger a callback when the thread is complete, the .then() method is used. The thread can be informed to cancel itself by using the .cancel() method. If the thread has completed, then the .then() callback will be executed immediately.
```javascript
require(["dojo/Deferred"], function(Deferred){
  var deferred = new Deferred();
  deferred.then(function(value){
    return something;
   });
});
```

**Promise** is an object that represents the eventual value returned from the completion of an operation. It can be in anyone of these states, unfulfilled, resolved or rejected.

References:   
http://dojotoolkit.org/reference-guide/1.8/dojo/Deferred.html
http://www.slideshare.net/sitepen/power-of-promises   