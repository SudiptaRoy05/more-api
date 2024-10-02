const loadCategories = async () => {
    try {
        const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.categories);
        
    }catch(error){
        console.log(error);
    }
}
const displayCategory = async(data) =>{
    const categoriBtn = document.getElementById('category');

    data.forEach(item => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = item.category;
        categoriBtn.appendChild(btn)
    })
}



loadCategories();
