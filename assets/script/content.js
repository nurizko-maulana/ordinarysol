import data from '../metadata.js';

data.forEach(injectData);

function injectData(item) {
    $('.rarirty-container').append(`<div class="card ordinary">
    <img loading="lazy" src="assets/images/os-min/Ordinary Sol ${item.number}.jpg" alt="">
    <div class="tag">#${item.number}</div>
    <div class="mint"><span>Mint Now</span></div>
    </div>`);
}



