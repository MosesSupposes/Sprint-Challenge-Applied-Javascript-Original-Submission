# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to add functionality to the tabs below the 'Lambda Times' logo. These tabs will act as filters for our articles, and when clicked on, should filter out all articles except those with that tag.

![Working Sprint Challenge Gif](./Sprint-Challenge.gif 'Example of working project')

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

    DOM stands for 'Document Object Model'. It's essentially an API for manipulating HTML and XML documents. Another way you can think of it is as a representation of web pabes that allows developers to programatically alter the style, structure, and content of the page.

    All frontend libraries/frameworks ever made thus far deal directly with the DOM API. In recent years, there's been a trend towards abstracting away the DOM through what's known as a "virtual DOM", and enabling developers to program their UIs in a more declarative, succint style, with an added emphasis on performance (this is achieved by techniques such as "DOM diffing" -- where there's a coordinated arbitrage before making changes to DOM -- and "memoization" -- where different DOM states get cached and are thus able to be repainted to a previous state with minimal computations).

2. What is an event?
    
    In the context of the DOM, an event is any interaction with the web page, typically induced by a user or a server. Examples of user-generated events are mouse clicks, keystrokes, and page scrolls. Server-generated events -- as commonly captured in frameworks such as React and client-side languages such as Dart and Elm -- can include incoming data from an API endpoint, establishing a real-time connection through a web socket, or sending/requesting cookies or other cache-related assets. The final type of event that can occur within the DOM are internal interactions produced by the DOM itself. One example of this is the DOM's `onload` event which fires when a DOM object has been loaded; this is most often used on the top level `<body>` element of a page to execute a script once a web page has completely loaded all of its content.

3. What is an event listener?

    An event listener is a higher order function that subscribes to a particular DOM event, and fires a callback function each time that event is registered.

4. Why would we convert a NodeList into an Array?

    The reason it's common to convert a NodeList into an Array is becuase NodeLists are a slimmer interface that don't have access to the plethora of common utilities that are useful when wrangling with an iterable data structure. When we convert a NodeList to an array, we have access to all the methods on the Array prototype, including `map`, `filter`, and `reduce` -- the holy grail of any iteration you'll ever have to perform.

5. What is a component?

    A component is a reusable piece of UI, independent of any other block of code. Components can either be packaged by style or behavior, but in most modern Javascript frameworks and UI kits, it's usually both.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code paying particular attention to the Tabs component and the Cards components. You will notice they share a data attribute. We will be using this data attribute to determine which cards should show when each tab is selected.

* [ ] Following the instructions in the `Tabs.js` file, complete the `TabLink`, and `TabCard` class components. It will look and feel very similar to the last project we worked on, but with a twist. Now, instead of one `Item` to display, we will need to display a collection of `Cards`. Think about ways to iterate over an array and manipulate each item.  **Note: You will need to un-comment the code after the lines of instructions.  The code is commented out so you can work error-free**

* [ ] Once you get your `Tab` component working properly add a couple more articles yourself and check out how it works.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. You have the HTML and CSS already in place, simply un-comment the HTML in the `index.html` file. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. You may reference the `Tabs.js` file for assistance.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, play around with the styling on all the components, and understand how each is built.
