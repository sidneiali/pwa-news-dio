const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

// const URL = 'http://localhost:3000/api';
const URL = 'https://stormy-brook-79548.herokuapp.com/api';

export async function getNews (subject) {
  try {
    const response = await fetch(`${URL}/${subject}`, params);
    return await response.json();
  } catch (err) {
    console.error('Ocorreu um erro ', err);
  }
}

export async function getNewsById (subject, id) {
  try {
    const response = await fetch(`${URL}/${subject}/${id}`, params);
    return await response.json();
  } catch (err) {
    console.error('Ocorreu um erro ', err);
  }
}
