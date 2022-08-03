// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  // console.log(JSON.parse(`{"bookId":"wo1KzgEACAAJ","authors":["Rachel Smythe"],"title":"Lore Olympus: Volume One","description":"Experience the propulsive love story of two Greek gods--Hades and Persephone--brought to life with lavish artwork and an irresistible contemporary voice. Scandalous gossip, wild parties, and forbidden love--witness what the gods do after dark in this stylish and contemporary reimagining of one of mythology's most well-known stories from creator Rachel Smythe. Featuring a brand-new, exclusive short story, Smythe's original Eisner-nominated web-comic Lore Olympus brings the Greek Pantheon into the modern age with this sharply perceptive and romantic graphic novel. This volume collects episodes 1-25 of the #1 WEBTOON comic, Lore Olympus.","image":"http://books.google.com/books/content?id=wo1KzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}`));
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
