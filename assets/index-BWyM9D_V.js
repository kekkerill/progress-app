(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class d{constructor(e){this.container=e,this.value=0,this.isAnimated=!1,this.isHidden=!1,this.render()}render(){if(this.container.innerHTML="",this.isHidden){this.container.style.visibility="hidden";return}this.container.style.visibility="visible";const e=document.createElement("div");e.className="progress-ring",this.updateProgress(e),this.container.appendChild(e);const t=document.createElement("div");t.className="inner-circle",e.appendChild(t)}updateProgress(e){if(this.isAnimated){const t=this.value/100*360;e.style.background=`conic-gradient(#005cff 0deg, #005cff ${t}deg, #eaf0f6 ${t}deg, #eaf0f6 360deg)`,e.classList.add("progress-animated")}else{e.classList.remove("progress-animated");const t=this.value/100*360;e.style.background=`conic-gradient(#005cff 0deg, #005cff ${t}deg, #eaf0f6 ${t}deg, #eaf0f6 360deg)`}}setValue(e){if(this.value=Math.max(0,Math.min(100,e)),!this.isHidden){const t=this.container.querySelector(".progress-ring");t&&this.updateProgress(t)}}setAnimated(e){if(this.isAnimated=e,!this.isHidden){const t=this.container.querySelector(".progress-ring");t&&this.updateProgress(t)}}setHidden(e){this.isHidden=e,this.render()}}document.querySelector("#app").innerHTML=`
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
`;const l=document.querySelector(".progress-container"),o=new d(l),r=document.getElementById("value");r.value=0;r.addEventListener("input",()=>{const n=Number(r.value);n<0&&(r.value=0),n>100&&(r.value=100),r.value=r.value.replace(/^0+(?=\d)/,""),r.value===""&&(r.value="0"),o.setValue(n)});const u=document.getElementById("animate");u.addEventListener("change",n=>{o.setAnimated(n.target.checked)});const p=document.getElementById("hide");p.addEventListener("change",n=>{o.setHidden(n.target.checked)});
