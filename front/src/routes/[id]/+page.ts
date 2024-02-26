
import type { Load } from "@sveltejs/kit"

export const load: Load = async ({ params }) => {
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
  
}

