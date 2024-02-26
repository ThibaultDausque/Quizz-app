// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';
import { loadID} from '$lib/utils';

export async function load(params) {
    // Récupérez les données en fonction de l'id (params.id)
    const questions = await loadID(params.id);

    if (questions) {
        // Retournez les données si elles existent
        return {
            props: {
                data: {
                    title: 'Hello world!',
                    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
                    questions
                }
            }
        };
    } else {
        // Retournez une erreur 404 si les données ne sont pas trouvées
        return error(404, 'Not found');
    }
}