// input search set by api
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.data))

}

const displaySearchResult = brands => {
    const searchResult = document.getElementById('search-result')
    brands.forEach(brand => {
        // console.log(brand);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${brand.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${brand.brand}</h5>
                <h4 class="card-title">Phone: ${brand.phone_name}</h4>
            </div>
        </div> 
        `;


        searchResult.appendChild(div);
    })

    // console.log(brand);
}

