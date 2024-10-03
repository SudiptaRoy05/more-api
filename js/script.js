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
        console.log(item)
        const card = document.createElement('div');
        card.classList.add = 'card card-compact'
        card.innerHTML = `
        <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
         src="${item.thumbnail}"
         alt="Shoes" />
         ${item.others['posted_date']?.length === 0 ? "" : `<span class="absolute right-0 bottom-0 mr-2 mb-2 bg-black p-2 rounded-md text-white text-sm">${item.others['posted_date']}</span>`}
    
</figure>

        <div class="px-0 py-3 flex gap-2">
            <div>
                <img class ="w-10 h-10 rounded-full" src="${item.authors[0].profile_picture}"/>
            </div>
            <div>
                <h2 class="font-bold">${item.title}</h2>
                <div class="flex items-center gap-2">
                    <p class ="text-gray-500">${item.authors[0].profile_name}</p>
                    ${item.authors[0].verified === true ? `<img class="w-[16px]" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>` : ""}
                    
                </div>
                <p>${item.others.views} Views</p>
            </div>
        </div>
        `
        vdoSec.appendChild(card);
    })
}






loadCategories();
loadVideos();



// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }