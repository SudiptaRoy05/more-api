const loadCategories = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.categories);

    } catch (error) {
        console.log(error);
    }
}

const loadVideos = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
        const res = await fetch(url);
        const data = await res.json();
        displayVideos(data.videos);
        // console.log(data.videos)

    } catch (error) {
        console.log(error);
    }
}





const displayCategory = async (data) => {
    const categoriBtn = document.getElementById('category');

    data.forEach(item => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = item.category;
        categoriBtn.appendChild(btn)
    })
}

const displayVideos = async (data) => {
    const vdoSec = document.getElementById('vdoSec');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add = 'card card-compact'
        card.innerHTML = `
        <figure>
            <img
      src="${item.thumbnail}"
      alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        vdoSec.appendChild(card);
    })
}






loadCategories();
loadVideos();
