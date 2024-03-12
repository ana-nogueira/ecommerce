export default function initMobile() {
  // FUNÇÃO PARA MUDAR AS IMAGENS DA CLASS DRESS STYLE

  const dressStyleItems = document.querySelector(".dress-style-items");
  const defaultDressItems = dressStyleItems.innerHTML;

  function checkWidth() {
    const windowWidth = window.innerWidth;
    return windowWidth;
  }

  function dressStyleToMobile(width) {
    if (width < 610) {
      console.log("menor");
      dressStyleItems.innerHTML = `<a class="casual" href=""><img src="./src/img/mobileimgs/casual.png" alt=""></a>
        <a class="formal" href=""><img src="./src/img/mobileimgs/formal.png" alt=""></a>
        <a class="party" href=""><img src="./src/img/mobileimgs/party.png" alt=""></a>
        <a class="gym" href=""><img src="./src/img/mobileimgs/gym.png" alt=""></a>`;
    } else {
      dressStyleItems.innerHTML = defaultDressItems;
    }
  }
  window.addEventListener("resize", () => {
    dressStyleToMobile(checkWidth());
  });
}
