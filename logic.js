function showClear(event) {
  if (searchText.value != '') {
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
  }
}

function doClearText(event) {
  let id = event.currentTarget.id;
  console.log(id);
  if (id == 'clearBtn') {
    searchText.value = '';
    clearBtn.style.display = 'none';
  }
}
