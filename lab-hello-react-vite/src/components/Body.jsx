import icon1Img from "../assets/icon1.png"
import icon2Img from "../assets/icon2.pngs"
import icon3Img from "../assets/icon3.png"
import icon4Img from "../assets/icon4.pngs"     


function Body(
      
) {
  return (
    <section class="articles-container">
      <article class="article">
      <img  src={icon1Img} alt="ironhack" />
        <h2>Declarative</h2>
        <p>React makes it painles to create interactive UIs.</p>
      </article>

      <article class="article">
      <img  src={icon2Img} alt="ironhack" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </article>

      <article class="article">
      <img  src={icon3Img} alt="ironhack" />
        <h2>Single-way</h2>
        <p>A set of immutable values are passed to the component's</p>
      </article>
      <article class="article">
      <img  src={icon4Img} alt="ironhack" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </section>
  );
}
export default Body;
