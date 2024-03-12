export default function initMobile() {
    const dressStyleItems = document.querySelector('.dress-style-items');
    const windowWidth = window.innerWidth;

    if (windowWidth < 610) {
        console.log('menor')
        dressStyleItems.innerHTML=`<a class="casual" href=""><img src="./src/img/gym.png" alt=""></a>
        <a class="formal" href=""><img src="./src/img/formal.png" alt=""></a>
        <a class="party" href=""><img src="./src/img/party.png" alt=""></a>
        <a class="gym" href=""><img src="./src/img/gym.png" alt=""></a>`;
    }
    

}