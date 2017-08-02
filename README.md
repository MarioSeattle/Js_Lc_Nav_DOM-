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

    querySelectorAll method --> is defined both on the document object and on element nodes, takes a
    selector string and returns an array-like object containing all the elements that it matches.

    <p>And if you go chasing

      <span class="animal">rabbits</span></p>

    <p>And you know you're going to fall</p>

    <p>Tell 'em a <span class="character">hookah smoking
      <span class="animal">caterpillar</span></span></p>

    <p>Has given you the call</p>

    <script>

      function count(selector) {
        return document.querySelectorAll(selector).length;

      }

      console.log(count("p"));           // All <p> elements
      // → 4
      console.log(count(".animal"));     // Class animal
      // → 2
      console.log(count("p .animal"));   // Animal inside of <p>
      // → 2
      console.log(count("p > .animal")); // Direct child of <p>
      // → 1

    </script>

    The querySelector method (without the All part) works in a similar way. This one is useful if you want a specific,
    single element. It will return only the first matching element or null if no elements match.

    *****Attributes and Text Content

    Some element attributes, such as href for links, can be accessed through a property of the same name on the
    element’s DOM object.

    But HTML allows you to set any attribute you want on nodes.

    This can be useful because it allows you to store extra information in a document.

    getAttribute and setAttribute methods to work with them

    <p data-classified="secret">The launch code is 00000000.</p>

    <p data-classified="unclassified">I have two feet.</p>

    <script>

      const paras = document.body.getElementsByTagName("p");

      for (const para of paras) {

        if (para.getAttribute("data-classified") == "secret") {

          para.textContent = '';

        }

      }

    </script>

    *****Updating Style

    JavaScript code can directly manipulate the style of an element through the node’s style property.
     This property holds an object that has properties for all possible style properties. The values
     of these properties are strings, which we can write to in order to change a particular aspect
     of the element’s style.

     <p id="para" style="color: purple">

       Pretty text

     </p>

     <script>

       const para = document.getElementById("para");

       console.log(para.style.color);

       para.style.color = "magenta";

     </script>

     Instead of changing the style inline, it's often better to add and remove classes. You can do that
     with the className property on a DOM element. This is equivalent to setting the "class" attribute.
     Keep in mind classes are separated by spaces, so it's important to remember that should you want
     to make changes.

     <p id="para">

       Pretty text

     </p>

     <script>

       const para = document.getElementById("para");

       para.className = "magenta toggled details";

     </script>

     *****DOM Element Traversal

     In this lesson, you will learn the following:

         Navigate around in a DOM tree by parent, children, and siblings.
         Create an HTML element programmatically.
         Add an HTML element to the DOM.

      every node has a parentNode property that points to its containing node. Likewise, every element
      node (node type 1) has a childNodes property that points to an array-like object holding its
      children.

      **In theory, you could move anywhere in the tree using just these parent and child links.

      The firstChild and lastChild properties point to the first and last child elements or have the value
      null for nodes without children.

       Similarly, previousSibling and nextSibling point to adjacent nodes, which are nodes with the same parent
       that appear immediately before or after the node itself. For a first child, previousSibling will be null, and
       for a last child, nextSibling will be null.

       The following recursive function scans a document for text nodes containing a given string and returns true when
       it has found one:

       function talksAbout(node, string) {

         if (node.nodeType === document.ELEMENT_NODE) {

           for (let i = 0; i < node.childNodes.length; i++) {

             if (talksAbout(node.childNodes[i], string))

               return true;
           }

           return false;

         } else if (node.nodeType == document.TEXT_NODE) {

           return node.nodeValue.indexOf(string) > -1;

         }

       }

       console.log(talksAbout(document.body, "book"));
       // → true

       The nodeValue property of a text node refers to the string of text that it represents.


       ****Changing the Document

       Almost everything about the DOM data structure can be changed. Element nodes have a number of methods that can be
        used to change their content.

       *The removeChild method removes the given child node from the document.

       *To add a child, we can use appendChild, which puts it at the end of the list of children

       *insertBefore, which inserts the node given as the first argument before the node given as the second argument.

       <p>One</p>

       <p>Two</p>

       <p>Three</p>

       <script>

         const paragraphs = document.body.getElementsByTagName("p");

         document.body.insertBefore(paragraphs[2], paragraphs[0]);

       </script>


    A node can exist in the document in only one place. Thus, inserting paragraph “Three” in front of paragraph
    “One” will first remove it from the end of the document and then insert it at the front,
    resulting in “Three/One/Two”.

    **All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current
    position (if it has one).

    **Note that both replaceChild and insertBefore expect the new node as their first argument.

    ******Creating nodes

    script that replaces all images (<img> tags) in the document with the text held in their alt attributes,
    which specifies an alternative textual representation of the image.

    This involves not only removing the images but adding a new text node to replace them.

    <p>The <img src="img/cat.png" alt="Cat"> in the

      <img src="img/hat.png" alt="Hat">.</p>

    <script>

      function replaceImages() {

        const images = document.body.getElementsByTagName("img");

        for (const image of images) {

          if (image.alt) {

            const text = document.createTextNode(image.alt);

            image.parentNode.replaceChild(text, image);

          }

        }

      }
    </script>

    **Given a string, createTextNode gives us a type 3 DOM node (a text node),
    which we can insert into the document to make it show up on the screen.

    **The loop that goes over the images starts at the end of the list of nodes.
    This is necessary because the node list returned by a method like getElementsByTagName
    (or a property like childNodes) is live. That is, it is updated as the document changes.







