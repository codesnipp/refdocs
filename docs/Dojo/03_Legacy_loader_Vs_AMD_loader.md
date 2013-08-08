The Legacy dojo API was used prior to 1.7 version where everything was loaded synchronously. It consists of dojo.require(), dojo.provide(), dojo.requireIf(), dojo.requireAfterIf(), dojo.platformRequire(), and dojo.requireLocalization().


The AMD API is the preferred loader with a simple format, asynchronous loading which reduces page load times, and broad adoption. It is exposed through two global functions, require and define.  

**require** is used to configure the loader and load AMD modules.         

```js
require([ "my/app", "dojo" ], function(app, dojo){
  // do something with app and dojo...
});
```
alternatively,

```js
require(
  moduleId // (string) a module identifier
)
```

This alternative require syntax can be used if you are certain the module referenced by moduleId has already been defined and loaded. It will return the requested module. If the module is not loaded, it will throw an Error.

**define()** method is the foundational AMD API, which allows us to define a module and its dependencies.
```js
define(
  ["dijit/layout/TabContainer", "bd/widgets/stateButton"],
  function(TabContainer, stateButton){
    // do something with TabContainer and stateButton...
    return definedValue;
  }
);
```

In define, Module creation is lazy and asynchronous, and does not occur immediately when define is called. This means that the function is not executed, and any dependencies of the module will not be resolved, until some running code actually requires the module.

The idea of AMD is that you define or require as needed and let the loader sort out the details.  As long as you write your code to be self contained and asynchronous aware and explicit about its requirements, the callbacks will be called when they need to be called.

References:     
http://dojotoolkit.org/documentation/tutorials/1.8/modules/                 
http://dojotoolkit.org/documentation/tutorials/1.8/declare/                                                     
http://livedocs.dojotoolkit.org/loader/amd#the-amd-api                                  
http://dojo-toolkit.33424.n3.nabble.com/require-vs-define-td3974013.html
  