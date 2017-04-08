# React and UI boilerplate

Built with "create-react-app" and "react-three-renderer"

On initial download, install all dependencies:
```
npm install
```

To start developing:
```
npm start
```

To build final app:
```
npm run build
```

To run tests:
```
npm test
```

*Note* basic coverage test "it('renders without crashing')" will fail as of react-three-renderer v3.1.0. Need to wrap 'react-three-renderer/lib/React3Instance.js' line 262 in the following code:
```
if (typeof requestAnimationFrame === 'function') {
  this._renderRequest = requestAnimationFrame(this._render); // Line 262
}
```
