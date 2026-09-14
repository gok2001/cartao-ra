document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector("#loading");

  const scene = document.querySelector("a-scene");

  scene.addEventListener("loaded", () => {
    loading.style.display = "flex";
  });

  scene.addEventListener("arReady", () => {
    loading.innerHTML = `
      <div class="loading-box">
        <strong>RA pronta</strong>
        <span>Aponte a câmera para o cartão.</span>
      </div>
    `;
  });

  scene.addEventListener("targetFound", () => {
    loading.innerHTML = `
      <div class="loading-box">
        <strong>Cartão reconhecido!</strong>
        <span>Explore as informações em Realidade Aumentada.</span>
      </div>
    `;
    setTimeout(() => {
      loading.style.display = "none";
    }, 1800);
  });

  scene.addEventListener("targetLost", () => {
    loading.style.display = "flex";
    loading.innerHTML = `
      <div class="loading-box">
        <strong>Tracking perdido</strong>
        <span>Volte a enquadrar o cartão na câmera.</span>
      </div>
    `;
  });
});
