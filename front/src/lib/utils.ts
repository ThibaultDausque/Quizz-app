export interface Question {
  id: string;
  title: string;
  
}

export interface PageData {
  title: string;
  content: string;
  questions: Question[];
}

export async function load/*fetchQuestions*/() {
  try {
    // const response = await fetch('/questions.json');
    const response = await fetch('http://localhost:3000/categories');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des questions');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des questions:', error);
    throw error;
  }
}

export async function loadID(params: { id: any }) {
  const isBroswer = typeof window !== "undefined";

  const apiUrl = isBroswer ? "http://localhost:3000/" : "http://back:3000/";
  //const apiUrl = isBrowser ? import.meta.env.VITE_API_URL_FRONT : import.meta.env.VITE_API_URL_BACK;
 
  console.log(apiUrl);
  try {
    const url = new URL(params.id, apiUrl); 
    console.log('API URL:', url);
    const response = await fetch(url.toString());

    console.log('API Response:', response);

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des questions');
    }

    const questions: Question[] = await response.json();
    console.log('Fetched questions:', questions);
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}

export async function fetchQuestions(id: any) {
  const isBroswer = typeof window !== "undefined";

  const apiUrl = isBroswer ? "http://localhost:3000/" : "http://back:3000/";
  console.log(apiUrl);
  try {
      const response = await fetch(`${apiUrl}/${id}`);

      if (!response.ok) {
          throw new Error('Erreur lors de la récupération des questions');
      }

      const questions = await response.json();
      return questions;
  } catch (error) {
      console.error('Error fetching questions:', error);
      throw error;
  }
}
