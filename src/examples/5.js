import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useMemo,
  useContext,
  useReducer,
  createContext,
} from "react";

/* const someExpensiveComputation = (x) => {
  for (let i = 0; i < x; ++i) {
    console.log(i);
  }
  return x
};
export default function Example() {
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(1000);
    return initialState;
  });
  return <p>{state}</p>;
} 
 */

// -------------------------------- useEffect ---------------------------------------

/* useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Clear subscription
    subscription.unsubscribe();
  };
});
 */

/* The cleanup function runs before the component is removed from the user interface to prevent memory leaks. 
    Also, if the component is rendered multiple times (as it usually does), the previous effect is cleared 
    before the next effect is executed. */

// Conditional triggering of an effect

/* By default, the effects run after each completed render. Thus, the effect is always re-created if the 
   value of any of the dependencies has changed. */

/* useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
); */

/* 
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <MyComponent count={count} />
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

// 🔴 It's not safe to do this (call `doSomething`, which uses` count`)

function MyComponent(props) {
  function doSomething() {
    console.log(props.count, "doSomething");
  }
  useEffect(() => {
    doSomething();
    console.log(props.count, "MyComponent useEffect");
  }, []);
  return <p>{props.count}</p>;
} */

// ✅ Correct (our effect uses only `count`)

/* function MyComponent2(props) {
  function doSomething() {
    console.log(props.count, "doSomething");
  }

  useEffect(() => {
    doSomething();

    console.log(props.count, "MyComponent useEffect");
  }, [props.count]);
  return <p>{props.count}</p>;
}
 */

//  ✅ This can be done in this example, because

/* useEffect(() => {
    function doSomething() {
      console.log('Привет');  
    }
    doSomething();
  }, []);  */

/* function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);
  async function fetchProduct() {
    const response = await fetch("http://myapi/product/" + productId); // Uses prop productId
    const json = await response.json();
    setProduct(json);
  }

  useEffect(() => {
    fetchProduct();
  }, []); // 🔴 Wrong, because `fetch Product` uses` productId`
  // ...
} */

/* function ProductPage({ productId }) {
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      // Переместив эту функцию внутрь эффекта, мы ясно видим, какие значения она использует.
      async function fetchProduct() {
        const response = await fetch('http://myapi/product/' + productId);
        const json = await response.json();
        setProduct(json);
      }
  
      fetchProduct();
    }, [productId]); // ✅ Correct, because the effect only uses productId
    // ...
  } */

/* There are times when the effect can depend on a condition that changes very often. 
    You may be tempted to not include this state in the list of hook dependencies,
    but this usually leads to bugs: */

/* If you rewrite the list of dependencies as [count], then the bug will be fixed, but this 
     will cause the interval to be reset on every change. */

/* export default function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(count + 1); // This effect depends on the state variable `count`
      }, 1000);
      return () => clearInterval(id);
    }, []); // 🔴 Bug: `count` is not specified as a dependency
    return <h1>{count}</h1>;
  } */

/* export default function Counter() {
     const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // This effect depends on the state variable `count`
    }, 1000);
    return () => clearInterval(id);
  }, [count]); 

  return <h1>{count}</h1>;
}
 */

// What if the effect dependencies change too often?

/* export default   function Counter() {
        const [count, setCount] = useState(0);
          useEffect(() => {
          const id = setInterval(() => {
            setCount(c => c + 1); // ✅ This line does not depend on the external variable `count`
          }, 1000);
          return () => clearInterval(id);
        }, []); // ✅ Our effect does not use any variables from the component's scope.
      
        return <h1>{count}</h1>;
      } */

// ---------------------------------- useLayoutEffect ----------------------------------

/* export default function Exempl() {
  useLayoutEffect(() => {
    for (let i = 0; i < 200000; ++i) {
      console.log(i);
    }
  });
  useEffect(()=>{  
      for (let i = 0; i < 20000; ++i) {
    console.log(i);
  }}) 
  return <p>Hello World</p>;
} */

// ----------------------------------- useCallback -----------------------------------------------
/* const doSomething = (a, b) => {
  console.log(a, b, "doSomething");
  return a + b;
};
function MemoizedComponet({ a, b }) {
  console.log(a, b, "MemoizedComponet");
  const memoizedCallback = useCallback(() => {
    return doSomething(a, b);
  }, [a,b]);

  const x = memoizedCallback()
  return <p>{x}</p>;
}

export default function Counter() {
  const [a, setA] = useState(5);
  const [b, setB] = useState(8);
  return (
    <>
      <MemoizedComponet {...{ a, b }} />
      <button onClick={() => setA((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setB((prevCount) => prevCount + 1)}>+</button>

    </>
  );
} */

// -----------------------------------  useMemo -----------------------------------------------

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

/* function Exempl2({ data: { a, b } }) {
  const computeExpensiveValue = (a, b) => {
    const x = [];

    for (let i = 0; i < 20000; ++i) {
      console.log(i);
      x.push(i);
    }
    return x.length;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), []);

  return <p>{memoizedValue}</p>;
}

export default function Counter() {
  const [count, setCount] = useState(100);
  return (
    <>
      <Exempl2 data={{ a: 0, b: count }} />
      <button onClick={() => setCount((prevCount) => prevCount * 10)}>*</button>
      <button onClick={() => setCount((prevCount) => prevCount / 10)}>/</button>
    </>
  );
} */

// -------------------------------------  useContext ---------------------------------------

//const value = useContext(MyContext);

/* const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.dark);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I'm styled with a theme out of context!
    </button>
  );
} */
// ------------------------------------ useReducer -------------------------------------

// const [state, dispatch] = useReducer(reducer, initialArg, init);

/* const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
} */

// Lazy initialization

/* 
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
} */

/// Termination of dispatch early

/* If you return the same value from the hook reducer as the current state, 
React exits without repainting the children or triggering effects. 
(React uses the Object.is comparison algorithm.) */

/* function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Загрузка...';
  }
  return isOnline ? 'В сети' : 'Не в сети';
} */
