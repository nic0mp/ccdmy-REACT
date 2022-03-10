// CLASS V CLASSNAME
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (
  <div className="big">
    I AM A BIG DIV
  </div>
);
ReactDOM.render(
  myDiv,
  document.getElementById('app')
)

// SELF CLOSING TAGS
const profile = (
    <div>
        <h1>I AM JENKINS</h1>
        <img src="images/jenkins.png" />
        <article>
        I LIKE TO SIT
        <br/>
        JENKINS IS MY NAME
        <br/>
        THANKS HA LOT
        </article>
    </div>
);

// Curly Braces in JSX
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
); // OUTPUT: 5 ..

// pi.js
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);
// app.js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = (
  <h1>2 + 3 = {2 + 3}</h1>
);

ReactDOM.render(
  math,
  document.getElementById('app')
)