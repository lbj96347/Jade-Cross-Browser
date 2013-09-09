Jade-Cross-Browser
==================

Jade - robust, elegant, feature rich template engine for NodeJs.Jade also can be used on client side except IE family.So I write some compatible codes to cross browser.

Introduction

------------

jade.js -- Jade Template Engine file

array-prototype.js -- The original jade.js is created by ECMAScript5 so that IE6-IE8 can't using jade like other browsers.So we should use some compatible code to support IEs.After reading the code of jade.js,I found that most issuse cause by the array methods.This array lib can be a independent file.

example -- An example of using jade in a cross browser demo.

Usage & Demo

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


