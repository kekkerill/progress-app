import "./style.css";
import { ProgressComponent } from "./ProgressComponent.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="progress-container"></div>
    <div class="controls">
      <form action="">
        <div class="input-wrapper">
        <p style="width: 8px"></p>
          <input type="number" id="value" min="0" max="100" />
          <label for="value">Value</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="animate" />
          <label for="animate"></label>
          <p>Animate</p>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="hide" />
          <label for="hide"></label>
          <p>Hide</p>
        </div>
      </form>
    </div>
  </div>
`;

const progressContainer = document.querySelector(".progress-container");
const progressComponent = new ProgressComponent(progressContainer);

const input = document.getElementById("value");
input.value = 0;
input.addEventListener("input", () => {
  const val = Number(input.value);
  if (val < 0) input.value = 0;
  if (val > 100) input.value = 100;
  input.value = input.value.replace(/^0+(?=\d)/, "");
  if (input.value === "") input.value = "0";
  progressComponent.setValue(val);
});

const animateCheckbox = document.getElementById("animate");
animateCheckbox.addEventListener("change", (e) => {
  progressComponent.setAnimated(e.target.checked);
});

const hideCheckbox = document.getElementById("hide");
hideCheckbox.addEventListener("change", (e) => {
  progressComponent.setHidden(e.target.checked);
});
