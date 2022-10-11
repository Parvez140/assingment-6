const searchPhone = () => {
    const searchField = document.getElementById('search-phone');
    const searchText = searchField.value;
    // console.log(searchText)
    // clear input
    searchField.value = '';
    // load data
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhone(data))
}

const displayPhone = phones => {
    console.log(phones)
}