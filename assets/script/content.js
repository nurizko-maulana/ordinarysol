import data from '../metadata.js';

data.forEach(injectData);

function injectData(item) {
    $('.rarirty-container').append(`<div class="card ordinary">
    <img class="image" width="240" width="240" data-lazy="assets/images/os-min/Ordinary Sol ${item.number}.jpg" alt="">
    <div class="tag">#${item.number}</div>
    <a href="https://exchange.art/collections/Ordinary%20People"><div class="mint"><span>Mint Now</span></div></a>
    </div>`);
}

const targets = document.querySelectorAll('.image');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        console.log(entries)
        entries.forEach(entry => {
            console.log('😍');

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');


                img.setAttribute('src', src);
                img.classList.remove('placeholder');


                observer.disconnect();
            }
        });
    });

    io.observe(target)
};

targets.forEach(lazyLoad);



