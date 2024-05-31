let searchForm = document.getElementById("search_form");
let searchedValue = document.getElementById("searchValue");

const searchEmoji = (e)=> {
    e.preventDefault();
    // console.log(searchedValue);
    displayResults(searchedValue);
    return false;
}

const autoSearch = (e)=> {
    let searchValue = e.target.value;
    // console.log(searchValue); 
    displayResults(searchValue);
}

const displayResults = (searchQuery = "") => {
    const filtered = emojiList.filter(e=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }
        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    });

    const parent = document.getElementById("search_result");
    parent.innerHTML = "";
    filtered.forEach(e=>{
        const new_row = document.createElement('tr');
        const new_emoji = document.createElement('td');
        const new_aliases = document.createElement('td');
        const new_desc = document.createElement('td');

        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases.join(", ");
        new_desc.innerText = e.description;

        new_aliases.innerText = new_aliases.innerText.replaceAll('_', " ");


        new_emoji.classList.add("emoji");
        new_aliases.classList.add("aliases");
        new_desc.classList.add("desc");

        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);
        parent.appendChild(new_row);
    })
} 


searchForm.addEventListener("submit", searchEmoji);
searchedValue.addEventListener("keyup", autoSearch);
window.onload = ()=> displayResults();