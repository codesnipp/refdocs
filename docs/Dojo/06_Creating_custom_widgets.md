We can create custom dojo widgets using dijit/_WidgetBase and dijit/_TemplatedMixin.

* Create a file structure for the widget                        
Create a folder "myApp" which will contain the custom code specifically written for our custom widget.         create a folder named "widget" which will contain css, images and templates.

* Create the .js file which contains our custom widget and save it in the "widget" directory. we need to inherit the _WidgetBase and _TemplatedMixin to create custom widgets.                            
**_WidgetBase** is the base class for all the widgets in digit.      
**_TemplatedMixin** is a mixin which takes HTML template and loads its DOM layout at run-time. Its reused by all instances of the templated widget.

        define([
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dojo/_base/declare",
         "dojo/dom-attr"
               ],
          function(_Widget, _Templated, declare, domAttr){
           return declare("myWidgets.HelloWorld", [_Widget, _Templated],{
           templateString: '<div data-dojo-attach-point="_box"></div>',
           postCreate: function(){
           domAttr.set(this._box, "innerHTML", "Hello, World!");
              } }); 
         });

    **templateString** is where we specify our template.                      
    **data-dojo-attach-point** is used to reference DOM node directly.          
    **postCreate** method is where we put our logic. It's called once our widget's DOM structure is ready, but            before it's been inserted into the page.
                                                                                     
* Set the dojoConfig as                            
```js
packages: [ {
    "name": "dojo",
    "location": "lib/dojo"
  },
  {
    "name": "dijit",
    "location": "lib/dijit"
}, {
    "name": "my",
    "location": "lib/myWidgets"
  }
]
```
* Call the custom widget                                      
```js
require(["dojo", "dojo/dom", "my/HelloWorld"],                                                                       
  function(dojo, dom, HelloWorld){                                                                                                         
    var helloWorld = new HelloWorld();                                                                                                          
    helloWorld.placeAt(dom.byId("test"));                                                                                                                                  
    helloWorld.startup();                                                                                                                                                       
} );
```                                    
**startup** method is designed to handle processing after any DOM fragments have been actually added to the document. It is not fired until after any potential child widgets have been created and started. 



References:                                                 
http://dojotoolkit.org/documentation/tutorials/1.8/recipes/custom_widget/                       
http://dojotoolkit.org/documentation/tutorials/1.8/templated/