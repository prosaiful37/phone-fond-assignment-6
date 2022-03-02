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

// phone search 
const displaySearchResult = brands => {
    const searchResult = document.getElementById('search-result')
    if(brands.length == 0){
        document.getElementById('error-msg').innerText = 'Result not found';
    }
    else{
        brands.forEach(brand => {
            // console.log(brand);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                <img  src="${brand.image}" class="card-img-top w-50 mx-auto py-5 img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Brand: ${brand.brand}</h5>
                    <h4 class="card-title">Phone: ${brand.phone_name}</h4>
                    <button onclick="loadPhoneDetails('${brand.slug}')" class="btn btn-warning" type="button">Details</button>
                </div>
            </div> 
            `;
            searchResult.appendChild(div);
        })
    
    }
   
}

// phone load details api call
const loadPhoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayPhoneDetails(data.data))
    // console.log(data);

}


// phone details all
const DisplayPhoneDetails = phone =>{
    console.log(phone.slug);
    const detailsPhone = document.getElementById('details-phone')
        const div = document.createElement('div');
        div.classList.add('col');
        detailsPhone.innerHTML = `
        <div class="card ">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto py-2 img-fluid" alt="...">
            <hr>
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <h4 class="card-title">${phone.name}</h4>
                <p class="card-text">ReleaseDate: ${phone.releaseDate}</p>
                <p class="card-text">ChipSet: ${phone.mainFeatures.chipSet}</p>
                <p class="card-text">DisplaySize: ${phone.mainFeatures.displaySize}</p>
                <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
                <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
                <hr>
                
                <p class="card-text">Bluetooth: ${phone.others.Bluetooth}</p>
                <p class="card-text">GPS: ${phone.others.GPS}</p>
                <p class="card-text">NFC: ${phone.others.NFC}</p>
                <p class="card-text">Radio: ${phone.others.Radio}</p>
                <p class="card-text">USB: ${phone.others.USB}</p>
                <p class="card-text">WLAN: ${phone.others.WLAN}</p>
                
            </div>
        </div> 
        `;

}


