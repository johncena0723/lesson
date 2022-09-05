G. Mani

What is ReactJS?
React is a JavaScript-based UI library. It was developed at Facebook with the purpose of creating interactive and reusable UI components.


Name some advantages of React?
High efficiency = flexibility and efficiency because of its own virtual DOM. 
Easier JavaScript writing =JSX syntax which allows you to mix HTML with JavaScript, writing is much easier with React.
A variety of developer tools
Great for SEO = Most of the JavaScript frameworks aren’t particularly search engine friendly, but that is not the case with React. 
Thanks to its unique virtual DOM that is rendered to the browser as a regular page
UI Test Cases:It is very easy to write UI test cases thanks to the virtual DOM in JavaScript.

What are th disadvantages of React.js?
Integration with traditional MVC framework requires major configurations
The steep learning curve for the beginners

What is the difference between createElement and cloneElement?
createElement what React uses to create React Elements, cloneElement, on the other hand, is used to clone an element and pass it new props.

What is the second argument that can optionally be passed to setState and what is its purpose?
when setState has finished and the component is re-rendered,setState is asynchronous and that is the reason why it requires a second callback function.

What is the difference between state and props?
Props and state do similar things but are used in different ways. The main difference is that props are immutable and 
cannot be changed while the state is used for mutable data or data that will change.

What is Redux?  
the entire application state is kept in a single store which is simply a JavaScript object. If you want to change the state, 
you need to fire actions from your application and then write reducers for these actions that modify the state. 
The entire state transition is kept inside reducers


What is the difference between React Native and React?
React is a JavaScript library and it supports both front-end web and being run on the server and 
it is commonly used for building user interfaces and web applications.

React Native, however, is a mobile framework that compiles to native app components. It allows us to build native mobile applications for Windows, Android, and
iOS in JavaScript while we can use ReactJS to build our components.
we can mimic the behavior of the native app in JavaScript and get a platform-specific code as the output.

What do you understand by “Single source of truth”?
The single source of truth refers to the store used for storing the app’s entire state at one place. The benefits of the single source of truth include the facts that all the components stored there receive updates from the store itself, 
it is easier to keep track of their changes, as well as debug and inspect the application.

What is React Router?
React Router is a powerful routing library built on top of React. It is highly useful for adding new screens and flows to the application while keeping the URL in sync with data displayed on the web page. 
The React Router has a simple AP and it maintains a standardized behavior and structure for developing single page web apps.

Why is switch keyword used in React Router v4?
The switch keyword, however, is used when you want to display only a single route to be rendered amongst the several defined routes. 

Why do we need a Router in React?
A Router is particularly useful for creating and defining multiple routes.

How Virtual-DOM is more efficient than Dirty checking?
the virtual DOM is more efficient than the Dirty checking simply because it prevents all the unnecessary re-renders. 
Re-rendering only occurs when the state changes.

What is render() in React? Explain its purpose.
each React component must have a render() because it returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, 
then they must be grouped together inside one enclosing tag such as <form>, <group>, <div>etc.

16. What is Flux in JavaScript?
Flux is an application architecture for creating data layers in JavaScript apps. It is neither a framework nor a library,
but a type of architecture that complements the concept of Unidirectional Data Flow.

What are refs in React? When to use them?
Refs are used for storing the reference of element or component returned by the component render() configuration function.
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.


What is the difference between DOM and virtual DOM in React.js?
Document Object Model is an abstraction of structured code (HTML). Dom and HTML code are interrelated as the elements of HTML are known as nodes of DOM. It defines a structure where users modify the content present in the structure in any way they want (create, edit, alter, modify etc.). Basically, HTML is a text, DOM is an in-memory representation of this text. 
Virtual DOM is a representation of DOM objects like a lightweight copy. It is used and provided for free by React.js

What are the controlled components and uncontrolled components in React?
A controlled input accepts values as props and callbacks to change that value. The uncontrolled component, on the other hand, 
is a substitute for controlled components. In these cases, DOM itself handles the form data.

What’s the difference between an Element and a Component in React?
React element is an object representation of some UI. Basically, it describes what you want to see on the screen. A React component, 
on the other hand, is a function or a class that optionally accepts input and returns a React element.

Explain the difference between functional and class components?
Functional: The components that return React elements as a result are called functional components.
They are basically just simple JavaScript functions.

Class: Class components, on the other hand,use plain Java objects for creating pages. With the React’s create-a-class-factory method, 
a literal is passed in defining the methods of a new component.


What is the use of the arrow function in React?
It allows you to predict the behavior of bugs when passed as callbacks hence it prevents bugs caused by this altogether.

What are Pure Components?
Pure components are the simplest and fastest components which can replace any component with only a render(). 

What is the significance of keys in React?
When you want to identify the unique virtual DOM elements with their corresponding data driving the UI – that is where the keys come in. By recycling all the existing elements in the DOM, the keys help React optimize the rendering. 

They allow React to reorder the elements instead of re-rendering them, which increases the app’s performance. 

Describe how event vcxuzt2  u us are handled in React?
solve cross-browser compatibility issues.

What are the advantages of Redux?
Predictability of outcome
Maintainability
Server-side rendering
Developer tools
Community and ecosystem
Ease of testing
Organization

Explain the components of Redux.
Action, Reducer, Store


What is JSX
javascript XML.SX is a syntax extension of JavaScript. It is used with React to describe 
what the user interface should look like

Can web browsers read JSX directly? 
Web browsers cannot read JSX directly.

What is Hot Reload?
Once we change is vs code automatically changes in UI

How to use props in components?
class components = this.props
functional components = {props}

Multiply parent use?
<> </> empty tags


muteability?
this.State

immutability?
this.setstate


useRef?
access the input text in form


Compare stateful and stateless components?
In both cases, the information about the change of states of the component is stored
Stateless components have the authority to change the state while stateful components do not have such authority
Stateless components store the information about past, present, and future states, while stateful components 
do not store such information about the components.

What are the phases of the lifecycle of React’s component?
Initial Phase: Initial phase is the phase when the components start the journey of their life to make their way to DOM
Updating Phase: At the time when components are added to DOM and update and rendered when a state or prop changes occur.
Unmounting Phase: This is called final phase of the component in which the component gets destroyed.

What are the methods of React component lifecycle?
componentWillMount() – On client and server side this function gets executed just before the rendering
componentDidMount() – After first render it gets executed on the client side
componentWillReceiveProps() – This function is invoked when the props are received from the parent class and 
another render is not being called.
shouldComponentUpdate() – This Boolean function returns true or false as per situation like if the 
component needs to be updated then true i/'/''''''''''''''''''''''''''''''''''''''''''''''''';
</div>s returned else false is returned
thecomponentWillUpdate() – It is called when rendering is not being called
componentDidUpdate() – It is called just after when render function is called
componentwillUnmount() – When a component gets un-mounted from DOM then this function is called.After




