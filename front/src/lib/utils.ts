export async function load() {
  try {
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
