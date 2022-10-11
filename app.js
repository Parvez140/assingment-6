const searchPhone = () => {
    const searchField = document.getElementById('search-phone');
    const searchText = searchField.value;
    // console.log(searchText)
    // clear input
    searchField.value = '';
    // load data
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(phones => displayPhone(phones.data))
}

const displayPhone = phones => {
    // console.log(phones)
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `
            <div onclick="loadPhoneDetails" class="card h-70">
                <img src="${phone.image}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
            </div>
    `;
    searchResult.appendChild(div);
    });
}
const loadPhoneDetails = phone => {
    console.log()
}