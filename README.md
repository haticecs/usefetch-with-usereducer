# useFetch Custom Hook with useReducer

This is the simple implementation of useFetch custom hook with useReducer to fetch data in react App.

## Recall ✨

Inside src we have following folders.

```txt
src
├── components
│   ├── Posts.jsx
└── hooks
|    └── useFetch.js
└── actions
|    └── actions.js
└── reducers
    └── fetchReducer.js
```

### In the React docs it says useReducer accepts a reducer of type (state, action) => newState and returns the current state paired with a dispatch method.

``const [state, dispatch] = useReducer(reducer, initialState);``

#### So, we need reducer function in the useReducer and, it will be called as dispatch() in the component.

✅ reducers stores reducer function that is defined as a useReducer's first argument.</br>
</br>&nbsp;&nbsp;&nbsp;&nbsp;👉 reducer taskes the action as parameter, and changes state accordingly via conditional (ex.swith-case) blocks. </br>
</br>✅ actions stores action types in our case FETCH_INIT, FETCH_START, FETCH_FAILURE.</br>
</br>✅ hooks store useFetch and it uses useReducer and useEffect to fetch data.</br>

### Executing program

clone or download the repository

```
git clone
```

go to project folder

```
cd usefetch-with-usereducer
```

install dependencies

```
yarn or npm install
```

start

```
yarn start or npm start
```
