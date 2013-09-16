Jade-Cross-Browser
==================

Jade - robust, elegant, feature rich template engine for NodeJs.Jade also can be used on client side except IE family.So I write some compatible codes to cross browser.

Jade - 一个在node.js下运行得非常好的模板引擎。当然有些时候我们需要在客户端使用该引擎。碰到IE也许我们会遇上一些兼容性的问题，但是使用目前这个项目，修复了IE下得一些Bug，那么你就可以安心地在IE6-8中使用了。

## Introduction ##

------------

jade.js -- Jade Template Engine file

array-prototype.js -- The original jade.js is created by ECMAScript5 so that IE6-IE8 can't using jade like other browsers.So we should use some compatible code to support IEs.After reading the code of jade.js,I found that most issuse cause by the array methods.This array lib can be a independent file.

array-prototype.js -- 在jade引擎中，代码使用ECMAScript 5编写。但是在IE家族中并不支持很多新的特性。因此，在该项目中出了添加了一些在Jade当中的兼容代码外。还有一个独立的js文件，用户兼容ECMAScript 5中数组的几种新的方法。方便开发者使用。当然你也可以在其他项目中使用该库。以便于使用新的数组特性。

example -- An example of using jade in a cross browser demo.

example -- 一个跨浏览器使用的例子。

## Usage & Demo ##

-----

    <!doctype>
    <html>
      <head>
        <title>Demo of Jade</title>
      </head>
      <body>
      </body>
      <script src='array-prototype.js'></script>
      <script src='jade.js'></script>
      <script>
        var compileText = 'h2 Hello World';
        var compile = jade.compile( compileText , { layout : false });
        var output = compile();
        document.write( output );
      </script>
    </html>


