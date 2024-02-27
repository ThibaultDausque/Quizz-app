import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch }) => {
    try {


        const response = await fetch(`http://localhost:3000/categories/name/${params.name}/questions`);
        console.log("Value of params.slug:", params.name);
        // Vérifier si la réponse est ok
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        // Convertir la réponse en JSON
        const data = await response.json();
        console.log("Data:", data);
        // Retourner les données pour être utilisées dans votre composant Svelte
        return { post: data };
    } catch (error) {
        console.error("Error fetching data:", error);
        // En cas d'erreur, vous pouvez retourner une valeur par défaut ou une erreur pour être traitée dans le composant Svelte
        return { error: "Failed to fetch data" };
    }
};