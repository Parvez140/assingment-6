   /* sipner */
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

   /* handle searche bar and load api data */
const searchPhone = () => {
    const searchField = document.getElementById('search-phone');
    const searchText = searchField.value;
    /* display spinner */
    toggleSpinner('block');

    /* clear input */
    searchField.value = '';
    /* load data */
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(phones => displayPhone(phones.data))
}
    /* display phone data on page */
    
const displayPhone = phones => {
    // console.log(phones)
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    phones?.forEach(phone => {
        // console.log(phone.slug)
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `
            <div class="card h-70">
                <img src="${phone.image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-success">Details</button>
            </div>
    `;
    searchResult.appendChild(div);
    });
    toggleSpinner('none')
}
    /* show phone details */
const loadPhoneDetails = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data))
}
const displayPhoneDetail = data => {
    // console.log(data.mainFeatures.sensors)
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
        <div class="card">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">ReleaseDate: ${data.releaseDate ? data.releaseDate: 'ReleaseDate is not found'}</p>
            <p class="card-text">Memory: ${data.mainFeatures.memory
            }</p>
            <p class="card-text">Display: ${data.mainFeatures.displaySize}</p>
            <p class="card-text">Sensors: ${data.mainFeatures.sensors}</p>
            
            </div>
        </div>  
    `;
    phoneDetails.appendChild(div)

}