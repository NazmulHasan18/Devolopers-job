import React from "react";

const Blog = () => {
   return (
      <div>
         <div className="bg-gradient-to-r from-[#7e8ffe11] to-[#9873ff19] text-center h-60 py-20 ">
            <h2 className="text-3xl font-bold mb-6">Question & Answer</h2>
         </div>
         <div className="container mx-auto my-24">
            <div className="bg-slate-200 p-4 rounded-lg mb-6">
               <h2 className="text-4xl font-bold">Question-1: When should you used context API?</h2>
               <p className="text-xl mt-4 text-slate-700">
                  <span className="text-3xl font-bold">Answer-1: </span>The Context API in React is a way to
                  share data between components without having to pass props manually at every level of the
                  component tree. It is useful when you have data that needs to be accessed by many components
                  at different levels in your application's component tree.
               </p>
               <p className="text-xl mt-4 text-slate-700">
                  We mostly use context API for{" "}
                  <strong>
                     sharing Themes data (light and dark), User authentication, multi-language, global state
                     management, etc.
                  </strong>
               </p>
               <p className="text-xl mt-4 text-slate-700">
                  The summary is we use context for share data to all component without using props.
               </p>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg mb-6">
               <h2 className="text-4xl font-bold">
                  Question-2: What is custom hook? What is the purpose of it?
               </h2>
               <p className="text-xl mt-4 text-slate-700">
                  <span className="text-3xl font-bold">Answer-2: </span>A custom hook is a JavaScript function
                  that starts with the prefix <strong>use</strong>. It is a way to reuse stateful logic and
                  share it between different components in a React application. By abstracting away complex
                  logic into a custom hook, you can make your code more reusable, easier to read, and easier
                  to maintain.
               </p>
               <p className="text-xl mt-4 text-slate-700">
                  The purpose of custom hooks is to help developers create modular, reusable code. By using
                  custom hooks, developers can short logic that can be shared across multiple components. This
                  can make code easier to read, test, and maintain.
               </p>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg mb-6">
               <h2 className="text-4xl font-bold">
                  Question-3: What is useRef hook? What is the purpose of it?
               </h2>
               <p className="text-xl mt-4 text-slate-700">
                  <span className="text-3xl font-bold">Answer-3: </span>
                  <strong>useRef</strong> is a built-in hook in React that returns a mutable ref object. The
                  ref object has a <strong>".current"</strong> property that can be used to store mutable
                  values. The purpose of <strong>useRef</strong> is to allow components to access and modify
                  mutable values that persist across renders without causing a re-render.
               </p>
               <p className="text-xl mt-4 text-slate-700">
                  We use the <strong>"useRef"</strong> hook to reference a DOM element, store mutable values
                  like counters or flags, or to preserve values without triggering re-renders. The component
                  can access and modify the value without causing React to re-render the component.
               </p>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg mb-6">
               <h2 className="text-4xl font-bold">
                  Question-4: What is useMemo hook? What is the work of it?
               </h2>
               <p className="text-xl mt-4 text-slate-700">
                  <span className="text-3xl font-bold">Answer-4: </span>
                  <strong>"useMemo"</strong> is a built-in hook in React that allows you to memoize a value,
                  which means that it can remember the result of a computation and only recompute it if the
                  inputs to that computation have changed. The purpose of <strong>"useMemo"</strong> is to
                  optimize performance by avoiding unnecessary computations.
               </p>
               <p className="text-xl mt-4 text-slate-700">
                  The <strong>"useMemo"</strong> hook takes two arguments:{" "}
               </p>
               <ul className="list-decimal list-inside text-xl mt-4 text-slate-700">
                  <li>A function that returns the computed value, The hook returns the memoized value.</li>
                  <li>
                     An array of dependencies that the function depends on, which is only recomputed when the
                     dependencies change
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Blog;
