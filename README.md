DZJSONKit
===========================================

DZJSONKit is a Titanium module for parsing JSONData or JSONStrings and stringify-ing Objects. It it based on [JSONKit](https://github.com/johnezang/JSONKit) by John Engelhart, which, in comparison to SBJSON, which is shipped with Titanium, is insanely fast. I highly recommend using this module whenever interacting with JSON in your titanium app.

*This module is for iOS only. It has been tested on iOS5.1 and iOS6.*


TEST HARNESS EXAMPLE FOR DZJSONKit
------------------------------------

The `example` directory contains a skeleton application test harness that can be 
used for testing and providing an example of usage for DZJSONKit.


INSTALL DZJSONKit
--------------------

1. Run `build.py` which creates your distribution
2. cd to `/Library/Application Support/Titanium`
3. copy this zip file into the folder of your Titanium SDK

REGISTER YOUR MODULE
---------------------

Register your module with your application by editing `tiapp.xml` and adding your module.
Example:

<modules>
	<module version="0.1">com.DZJSONKit</module>
</modules>

When you run your project, the compiler will know automatically compile in your module
dependencies and copy appropriate image assets into the application.

USING YOUR MODULE IN CODE
-------------------------

To use your module in code, you will need to require it. 

~~~~
var kit = require('com.DZJSONKit');
~~~~

Once you have included the module in your code, the module exposes certain methods for interacting with JSON. 

~~~~
/* To parse a response JSON String:  */

var objectFromString = kit.parseString(jsonString);



/* To parse JSON response recevied as Data: */

var objectFromData = kit.parseData(jsonData);



/* To stringify a valid JSON Object */

var stringFromObkect = kit.stringifyObject(jsonObject);

~~~~

### Notes
- It it important to note that the JSONKit library works only with UTF-8 encoded data. If your data is not UTF-8 encoded, or you suspect so, kindly encode it before parsing.  
- JSONKit is dual licensed under either the terms of the BSD License, or alternatively under the terms of the Apache License, Version 2.0. Copyright © 2011, John Engelhart. Kindly include the required licenses in your app if using JSONKit.
- DZJSONKit is published as a no-license module. However, do note that I shall not be responsible for any inconsistencies or damages caused by the inclusion and/or usage of the module, as a whole or in parts.  
  
*An excerpt from the README docs of JSONKit*

### A Very High Performance Objective-C JSON Library

**UPDATE:** (2011/12/18) The benchmarks below were performed before Apples [`NSJSONSerialization`][NSJSONSerialization] was available (as of Mac OS X 10.7 and iOS 5).  The obvious question is: Which is faster, [`NSJSONSerialization`][NSJSONSerialization] or JSONKit?  According to [this site](http://www.bonto.ch/blog/2011/12/08/json-libraries-for-ios-comparison-updated/), JSONKit is faster than [`NSJSONSerialization`][NSJSONSerialization].  Some quick "back of the envelope" calculations using the numbers reported, JSONKit appears to be approximately 25% to 40% faster than [`NSJSONSerialization`][NSJSONSerialization], which is pretty significant.

  Parsing  |  Serializing
:---------:|:-------------:
<img src="http://chart.googleapis.com/chart?chf=a,s,000000%7Cb0,lg,0,6589C760,0,6589C7B4,1%7Cbg,lg,90,EFEFEF,0,F8F8F8,1&chxl=0:%7CTouchJSON%7CXML+.plist%7Cjson-framework%7CYAJL-ObjC%7Cgzip+JSONKit%7CBinary+.plist%7CJSONKit%7C2:%7CTime+to+Deserialize+in+%C2%B5sec&chxp=2,40&chxr=0,0,5%7C1,0,3250&chxs=0,676767,11.5,1,lt,676767&chxt=y,x,x&chbh=a,5,4&chs=350x185&cht=bhs&chco=6589C783&chds=0,3250&chd=t:410.517,510.262,539.614,1351.257,1683.346,1747.953,2955.881&chg=-1,0,1,3&chm=N+*s*+%C2%B5s,676767,0,0:5,10.5%7CN+*s*+%C2%B5s,3d3d3d,0,6,10.5,,r:-5:1&chem=y;s=text_outline;d=666,10.5,l,fff,_,Decompress+%2b+Parse+is+just;ds=0;dp=2;py=0;of=58,7%7Cy;s=text_outline;d=666,10.5,l,fff,_,5.6%25+slower+than+Binary+.plist%21;ds=0;dp=2;py=0;of=53,-5" width="350" height="185" alt="Deserialize from JSON" /> | <img src="http://chart.googleapis.com/chart?chf=a,s,000000%7Cb0,lg,0,699E7260,0,699E72B4,1%7Cbg,lg,90,EFEFEF,0,F8F8F8,1&chxl=0:%7CTouchJSON%7CYAJL-ObjC%7CXML+.plist%7Cjson-framework%7CBinary+.plist%7Cgzip+JSONKit%7CJSONKit%7C2:%7CTime+to+Serialize+in+%C2%B5sec&chxp=2,40&chxr=0,0,5%7C1,0,3250&chxs=0,676767,11.5,1,lt,676767&chxt=y,x,x&chbh=a,5,4&chs=350x175&cht=bhs&chco=699E7284&chds=0,3250&chd=t:96.387,466.947,626.153,1028.432,1945.511,2156.978,3051.976&chg=-1,0,1,3&chm=N+*s*+%C2%B5s,676767,0,0:5,10.5%7CN+*s*+%C2%B5s,4d4d4d,0,6,10.5,,r:-5:1&chem=y;s=text_outline;d=666,10.5,l,fff,_,Serialize+%2b+Compress+is+34%25;ds=0;dp=1;py=0;of=51,7%7Cy;s=text_outline;d=666,10.5,l,fff,_,faster+than+Binary+.plist%21;ds=0;dp=1;py=0;of=62,-5" width="350" height="185" alt="Serialize to JSON" />
*23% Faster than Binary* <code><em>.plist</em></code>*&thinsp;!* | *549% Faster than Binary* <code><em>.plist</em></code>*&thinsp;!*

