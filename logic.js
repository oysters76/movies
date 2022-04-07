const SIZE_OF_SEARCH_SUGGEST_DIV = 3.5; // vh
const SEARCH_SUGGEST_BOX_TOP_MULTIPLIER = 3.1;

function showClear(event) {
  if (searchText.value != '') {
    clearBtn.style.display = 'block';
    doSearchSuggest(event);
  } else {
    clearBtn.style.display = 'none';
    hideSearchSuggestIfOpen(event);
  }
}

function doSearchSuggest(event) {
  let searchStr = searchText.value;
  populateSearchSuggest(getSearchStrs(searchStr));
}

function hideSearchSuggestIfOpen(event) {
  let searchSuggestDiv = document.querySelector('.searchSuggestDiv');
  let searchFormDiv = document.querySelector('.searchFormDiv');
  searchSuggestDiv.style.display = 'none';
  searchFormDiv.style.backgroundColor = 'transparent';
  searchFormDiv.style.borderBottom = '5px solid white';
  searchFormDiv.style.borderBottomLeftRadius = '24px';
  searchFormDiv.style.borderBottomRightRadius = '24px';
}

function populateSearchSuggest(strs) {
  let searchSuggestDiv = document.querySelector('.searchSuggestDiv');
  let searchFormDiv = document.querySelector('.searchFormDiv');
  searchSuggestDiv.style.top =
    (searchFormDiv.getBoundingClientRect()['top'] / 600) * 100 +
    SEARCH_SUGGEST_BOX_TOP_MULTIPLIER +
    '%';
  searchSuggestDiv.style.display = 'block';
  searchFormDiv.style.backgroundColor = 'rgb(38, 38, 99)';
  searchFormDiv.style.borderBottom = 'none';
  searchFormDiv.style.borderBottomLeftRadius = '0';
  searchFormDiv.style.borderBottomRightRadius = '0';
  buildSearchSuggestStrs(searchSuggestDiv, strs);
}

function buildSearchSuggestStrs(elem, strs) {
  elem.innerHTML = '';
  elem.style.display = 'flex';
  elem.style.flexDirection = 'column';
  elem.style.justifyContent = 'center';
  elem.style.alignItems = 'flex-start';
  elem.style.height = strs.length * SIZE_OF_SEARCH_SUGGEST_DIV + 'vh';
  for (let i = 0; i < strs.length; i++) {
    let strDiv = document.createElement('div');
    let strLbl = document.createElement('label');
    strLbl.textContent = strs[i];
    strDiv.appendChild(strLbl);
    elem.appendChild(strDiv);
  }
}

function doClearText(event) {
  let id = event.currentTarget.id;
  console.log(id);
  if (id == 'clearBtn') {
    searchText.value = '';
    clearBtn.style.display = 'none';
    hideSearchSuggestIfOpen();
  }
}
