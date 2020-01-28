import React, { useState } from 'react';

// For each exercice, name your component following this rule:
// Exercice 1 -> Ex1
// Exercice 2 -> Ex2 
// ...

// Start from this component
const Base = function() {
    return (
    <div>
      <p>Hello 世界</p>
      <button>
        Translation please
      </button>
    </div>
  )
}

// Exercice 1
// Since Japanese is not everyoby's forte, 
// Write a component that changes the text to "Hello World" 
// Note: The initial value should be what is set in the 
// Base component

const Ex1 = function() {
    const [text, setText] = useState('Hello 世界')
    return (
        <div>
          <p>{text}</p>
          <button onClick={() => setText('Hello World')}>
            Translation please
          </button>
        </div>
    )
}

// Exercice 2
// Now, your japanese friend is lost.. Make it so that 
// By clicking on the button again the original text 
// is displayed again

const Ex2 = function() {
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation please
          </button>
        </div>
    )
}


// Exercice 3
// If you click a third time, can you read the text?
// If not, make it so that if we click on the button
// it always changes the text to the other language (the text toggles)

const Ex3 = function() {
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation please
          </button>
        </div>
    )
}

// Exercice 4
// Now, update the button's text so that it indicates
// which language it will translate to
// If Japanese is displayed, the button must say "Translation to english please"
// When English is diplayed, the button must say "Translation to japanese please"
// The toggle functionality should still be there.

const Ex4 = function() {
    const lang = ['english', 'japanese']
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation to {lang[idx]} please
          </button>
        </div>
    )
}

// --------------
// put in separate file maybe

const Base2 = function() {
    return (
    <div>
      <p>1</p>
      <button>
        Click me!
      </button>
    </div>
  )
}

// Exercice 5
// Write a component that adds 1 to the p tag value on each click
// The p tag should start at 0

const Ex5 = function() {
    const [count, setCount] = useState(0)
    return (
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count+1)}>
            Click me!
          </button>
        </div>
    )
}

// Exercice 6
// Write a component that displays the next value
// in the fibonacci serie when we click on the button
// the fibonacci serie is as follows 0,1,1,2,3,5,8,13,21,...
// Got the logic?
// No? too bad...

const Ex6 = function() {
    const [fib, setFib] = useState([0,1])
    return (
        <div>
          <p>{fib[0]}</p>
          <button onClick={() => setFib([fib[1], fib[0]+fib[1]])}>
            Click me!
          </button>
        </div>
    )
}


// Exercice 7
// Update the p tag to reflect how many times a button was clicked
// initial value should be 0

const Ex7 = function() {
    const [count, setCount] = useState(0)
    return (
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>
            click me
          </button>
        </div>
    )
}

// Exercice 8
// Setup
  // Add to button tags to the component (3 in total)
  // first button text value is "fruit"
  // first button text value is "meat"
  // first button text value is "vegetables"
// Goal
  // Set the p tag text to: "I like ..." where ... is the text value of the button

const Ex8 = function() {
    const [text, setText] = useState('')
    return (
        <div>
          <p>I like {text}</p>
          <button onClick={() => setText("fruit")}>
            fruit
          </button>
          <button onClick={() => setText('meat')}>
            meat
          </button>
          <button onClick={() => setText('vegetables')}>
            vegetables
          </button>
        </div>
    )
}

// Exercice 9
// Setup
  // Still remove one button element (keep only two)
  // The first button text value is "UPPER"
  // The second button text value is "LOWER"
  // initial value of the p tag is 'Last click:'
// Goal
  // On clicking any of the buttons
  // the p tag value should indicate which one of the buttons was clicked last
  // Append it to the initial 'Last click'

const Ex9 = function() {
    const [text, setText] = useState('')
    return (
        <div>
          <p>Last click: {text}</p>
          <button onClick={() => setText("UPPER")}>
            UPPER
          </button>
          <button onClick={() => setText('LOWER')}>
            LOWER
          </button>
        </div>
    )
}


// Exercice 10
// Setup (start from the Base component)
  // replace the p tag with an unordered list tag. 
  // add two lists elements within the unordered list. One that has "docker" as value the other "kubernetes".
  // Set the text of the button element to "Add element"
// Goal
  // On button click, a new list item should be appended in the unordered list. It should have as value "containerd"

const Ex10 = function() {
  const [items, setItems] = useState(['docker', 'kubernetes'])
  return (
    <div>
      <ul>
        {
          items.map((item, idx) => <li key={idx}>{item}</li> )
        }
      </ul>
      <button onClick={() => setItems(['docker', 'kubernetes', 'containerd'])}>
        Add element
      </button>
    </div>
  )
}

// Exercice 11
// Setup (start from the Base component)
  // replace the p tag with an unordered list tag. 
  // Keep the unordered list empty
  // Set the text of the button element to "Add element"
// Goal
  // On button click, a new item is added to the unordered list.
  // The value of the item is taken from the following list (keep the order!) :
  // ipsizzle
  // nullizzle
  // sapizzle
  // velizzle
  // crackalackin
  // maurizzle
  // rhoncizzle

const Ex11 = function() {
  const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle']
  const [items, setItems] = useState([])
  const [idx, setIdx] = useState(1)
  return (
    <div>
      <ul>
        {
          items.map((item, idx) => <li key={idx}>{item}</li> )
        }
      </ul>
      <button onClick={() => {
        setIdx(idx+1)
        setItems(default_list.slice(0, idx))
      }}>
        Add element
      </button>
    </div>
  )
}

// Exercice 12
// Setup (start from the Base component)
  // replace the p tag with an unordered list tag. 
  // Keep the unordered list empty
  // Set the text of the button element to "Add element"
// Goal
  // Same as previous exercice, but this time the list is passed as a props

const Ex12 = function({base_list}) {
  const [items, setItems] = useState([])
  const [idx, setIdx] = useState(1)
  return (
    <div>
      <ul>
        {
          items.map((item, idx) => <li key={idx}>{item}</li> )
        }
      </ul>
      <button onClick={() => {
        setIdx(idx+1)
        setItems(base_list.slice(0, idx))
      }}>
        Add element
      </button>
    </div>
  )
}

// Exercice 13
// Setup (start from the Ex11 component)
  // Add an extra button element with the text "Remove element"
// Goal
  // On "Add element" button click, a new item is added to the unordered list.
  // On "Remove element" button click, a new item is added to the unordered list.
  // Use the same list as in exercice 11


const Ex13 = function() {
  const default_list = ['ipsizzle', 'nullizzle', 'sapizzle', 'velizzle', 'crackalackin', 'maurizzle', 'rhoncizzle']
  const [items, setItems] = useState([])
  const [idx, setIdx] = useState(1)
  return (
    <div>
      <ul>
        {
          items.map((item, idx) => <li key={idx}>{item}</li> )
        }
      </ul>
      <button onClick={() => {
        setIdx(idx+1)
        setItems(default_list.slice(0, idx))
      }}>
        Add element
      </button>
      <button onClick={() => {
        setIdx(idx-1)
        setItems(default_list.slice(0, idx))
      }}>
        Remove element
      </button>
    </div>
  )
}

// Exercice 14
// Setup
  // Same as Ex13
// Goal
  // Same as previous ex, but this time the list is passed as a props

const Ex14 = function({base_list}) {
  const [items, setItems] = useState([])
  const [idx, setIdx] = useState(1)
  return (
    <div>
      <ul>
        {
          items.map((item, idx) => <li key={idx}>{item}</li> )
        }
      </ul>
      <button onClick={() => {
        setIdx(idx+1)
        setItems(base_list.slice(0, idx))
      }}>
        Add element
      </button>
      <button onClick={() => {
        setIdx(idx-1)
        setItems(base_list.slice(0, idx))
      }}>
        Remove element
      </button>
    </div>
  )
}


export { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12, Ex13, Ex14 };

































