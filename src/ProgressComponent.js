export class ProgressComponent {
  constructor(containerElement) {
    this.container = containerElement;
    this.value = 0;
    this.isAnimated = false;
    this.isHidden = false;
    this.render();
  }

  render() {
    this.container.innerHTML = "";
    if (this.isHidden) {
      this.container.style.visibility = "hidden";
      return;
    }
    this.container.style.visibility = "visible";

    const progressRing = document.createElement("div");
    progressRing.className = "progress-ring";
    this.updateProgress(progressRing);
    this.container.appendChild(progressRing);

    const innerCircle = document.createElement("div");
    innerCircle.className = "inner-circle";
    progressRing.appendChild(innerCircle);
  }

  updateProgress(progressRing) {
    if (this.isAnimated) {
      const angle = (this.value / 100) * 360;
      progressRing.style.background = `conic-gradient(#005cff 0deg, #005cff ${angle}deg, #eaf0f6 ${angle}deg, #eaf0f6 360deg)`;
      progressRing.classList.add("progress-animated");
    } else {
      progressRing.classList.remove("progress-animated");
      const angle = (this.value / 100) * 360;
      progressRing.style.background = `conic-gradient(#005cff 0deg, #005cff ${angle}deg, #eaf0f6 ${angle}deg, #eaf0f6 360deg)`;
    }
  }

  setValue(value) {
    this.value = Math.max(0, Math.min(100, value));
    if (!this.isHidden) {
      const progressRing = this.container.querySelector(".progress-ring");
      if (progressRing) {
        this.updateProgress(progressRing);
      }
    }
  }

  setAnimated(isAnimated) {
    this.isAnimated = isAnimated;
    if (!this.isHidden) {
      const progressRing = this.container.querySelector(".progress-ring");
      if (progressRing) {
        this.updateProgress(progressRing);
      }
    }
  }

  setHidden(isHidden) {
    this.isHidden = isHidden;
    this.render();
  }
}
