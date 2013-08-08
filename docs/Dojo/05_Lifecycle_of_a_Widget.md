**Lifecycle of widget:**                                       
Conception of widget, usability by an application and destruction of widget and its associated dom elements.                             
Two concepts - > set of methods called after the creation of widget, and getting and setting fields with data while the widget lives in the application.                               
During instantiation, these methods are called:                 
Constructor - all prototypes, called when instantiated                
postscript - all prototypes build using declare                    
postmixInProperties                                     
buildRendering                          
postCreate                                      
startup                                                       
All these methods handle the intitial values, visual representation, when to deal with logic of the widget placed in the dom node.           
**postCreate():**                                             
customising a widget takes place here including modifications or adding any custom attributes. This method is fired after all the properties of widget are defined, and document fragment containing the widget is created, but before the fragment is added to the main document.                   
**startup():**                            
method which handles any processing after the document fragment is added to the main document, not fired untill any child widgets have been created and started. useful for composite and layout widgets                       
Difference:
When a widget is instantiated programatically, we need to call the             startup() method after placing the widget in the document.

References:                                             
http://dojotoolkit.org/documentation/tutorials/1.8/understanding_widgetbase/