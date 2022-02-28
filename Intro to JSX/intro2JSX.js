<p>Hello world</p>;

// JSX element being saved in a variable:
const myArticle = <article>My article</article>;

// ATTRIBUTES IN JSX
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// NESTED JSX
const myDiv = (
  <div>
    <h1>Hello World</h1>
  </div>
);

// JSX OUTER ELEMENTS
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
      freaked out.
    </article>
  </div>
);
// The first opening tag and the final closing tag of a 
// JSX expression must belong to the same JSX element
