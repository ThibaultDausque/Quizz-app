export async function fetchQuestions() {
    try {
        const response = await fetch('/questions.json', { cache: 'no-cache' });
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