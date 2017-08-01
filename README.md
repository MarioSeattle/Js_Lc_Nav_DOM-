    In this lesson, you will learn the following:

    Explain what the Document Object Model (DOM) is.
    Explain why the DOM is useful.
    Translate a simple web page to a DOM structure in construction order.

    ****What is the Document Object Model?

    When you open a web page in your browser, the browser retrieves the page’s HTML
    text and parses it. The browser builds up a model of the document’s structure and
    then uses this model to draw the page on the screen.

    **It acts as a live data structure: when it is modified, the page on the screen is updated
    to reflect the changes.

    ****Document structure

    You can imagine an HTML document as a nested set of boxes. Tags such as <body> and </body>
    enclose other tags, which in turn contain other tags or text. Here’s an example document:

    <!doctype html>
    <html>

      <head>
        <title>My home page</title>
      </head>

      <body>
        <h1>My home page</h1>
        <p>Hello, I am Marijn and this is my home page.</p>
        <p>I also wrote a book! Read it
          <a href="http://eloquentjavascript.net">here</a>.</p>
      </body>

    </html>

    //The data structure the browser uses to represent the document follows this shape.

    //This representation is called the Document Object Model, or DOM for short.

    //The global variable document gives us access to these objects.

    **Its documentElement property refers to the object representing the <html> tag.
    It also provides the properties head and body, which hold the objects for those elements.


    **Trees

    We often think of a DOM as a tree because it is composed of many branches. Each element is
    referred to ﻿ a node﻿. Each node may refer to other nodes, children, which in turn may have
    their own children. This shape is typical of nested structures where elements can contain
    sub-elements that are similar to themselves.

    *****Why is the DOM important?

    The DOM is a translation of HTML into JavaScript, and it serves two purposes.

        Updates in the HTML page are reflected in the DOM (like user input)
        Updates to the DOM via JavaScript update the HTML page.

        In short, the DOM will allow the ability to build interactions into our websites!

        //EXAMPLE

     <!DOCTYPE html>
     <html>

       <head>
         <title>Page Title</title>
       </head>

       <body>
         <h1>My First Heading</h1>
         <p>My first paragraph with a link to <a href="https://www.google.com">Google</a>.</p>
         <p>I like to show Puppy gifs! <img src="puppies.gif" alt="Puppies!></p>
       </body>

     </html>

     There is one root node.  True

     The img element is not a node (since it is self-closing). False

     There are 9 nodes total in the tree.  True

     DOCTYPE is the root element.  False

     The body node has 3 children.  True

     The a node is a child of one of the p nodes.  True

     <!doctype html>
     <html>
       <head>
         <title>My home page</title>
       </head>
       <body>
         <h1>My home page</h1>
         <p>Hello, I am Marijn and this is my home page.</p>
         <p>I also wrote a book! Read it
           <a href="http://eloquentjavascript.net">here</a>.</p>
       </body>
     </html>


    html
    --head
    ----title
    --body
    ----h1
    ---- p (first one)
    ----p (second one)
    ------a

    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>My First Heading</h1>
        <p>My first paragraph with a link to <a href="https://www.google.com">Google</a>.</p>;
        <p>I like to show Puppy gifs! <img src="puppies.gif" alt="Puppies!></p>
      </body>
    </html>


    html
    --head
    ----title
    --body
    ----h1
    ----p (first one)
    ------a
    ----p (second one)
    ------img

    *****DOM Element Selection

    In this lesson, you will learn the following:

        Insert JavaScript into an HTML page.
        Write various ways of selecting elements on a page including:
            getElementById
            getElementsByTagName
            getElementsByClassName
            querySelectorAll
            querySelector

    In this lesson, you will learn the following:

         Edit an attribute of a DOM element.
         Edit the text in a DOM element.
         Edit the class of a DOM element.
         Edit the style of a DOM element.

     In this lesson, you will learn the following:

         Open the Developer Tools in a browser (Chrome will be used here).
         Type JavaScript commands in the console.
         Debug JavaScript code using breakpoints.

    ******Adding JavaScript to an HTML Page

    Adding JavaScript to an HTML page requires use of the <script> tag. There are two ways of including JavaScript
    into an HTML page.

        Write JavaScript inside the HTML page itself inside the <script> tags.
        Write the JavaScript in a separate file and load it in.

    *****Where to Place the <script> Tag

    We'll discuss events in the future, so for now, let's focus on placing our <script> tags at the bottom
    (it's what I prefer anyways).

    *****Finding elements

    Another complicating factor is that text nodes are created even for the whitespace between nodes.

    <!doctype html>
    <html>
      <head>
        <title>My home page</title>
      </head>
      <body>
        <h1>My home page</h1>
        <p>Hello, I am Marijn and this is my home page.</p>
        <p>I also wrote a book! Read it
          <a href="http://eloquentjavascript.net">here</a>.</p>
      </body>
    </html>

    **if we want to get the href attribute of the link in that document, we don’t want to say something like “Get
    the second child of the sixth child of the document body”. It’d be better if we could say “Get the first link in
    the document”

    const link = document.body.getElementsByTagName("a")[0];

    console.log(link.href);

    //To find a specific single node, you can give it an id attribute and use
    document.getElementById instead.

    <p>My ostrich Gertrude:</p>
    <p><img id="gertrude" src="img/ostrich.png"></p>

    <script>
      var ostrich = document.getElementById("gertrude");
      console.log(ostrich.src);
    </script>

    //similar method is getElementsByClassName, which, like ﻿getElementsByTagName, searches through
    the contents of an element node and retrieves all elements that have the given string in their
    class attribute (ie a CSS class).


    *****QuerySelector and QuerySelectorAll


