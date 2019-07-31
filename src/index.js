import "./styles.css";
import iceCreamCones from "./images/ice-cr3am-cone.jpg";

document.getElementById("app").innerHTML = `
<div class="container">
  <h1>Hello Vanilla Land!</h1>
  <img id="ice-cream-cones" src="${iceCreamCones}" alt="ice-cr3am-cone" />
  <div>
  just for messing around with circleci
  </div>
</div>
`;
