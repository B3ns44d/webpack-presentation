class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }

  get(key) {
    return this.storage.getItem(key);
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const localStorage = new LocalStorage();

const container = document.querySelector('#container');

localStorage.set('name', 'Bensaad');

container.innerText = localStorage.get('name');

const input = document.querySelector('#input');

const set = document.querySelector('#set');

set.addEventListener('click', () => {
  localStorage.set('name', input.value);
})

const get = document.querySelector('#get');

get.addEventListener('click', () => {
  container.innerText = localStorage.get('name');
})

const removeBtn = document.querySelector('#remove');

removeBtn.addEventListener('click', () => {
  localStorage.remove('name');
  container.innerText = 'Removed';
});

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  container.innerText = 'Nothing to show';
});

