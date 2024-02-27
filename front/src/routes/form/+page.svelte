<script lang="ts">
    
    export let category = {
        name: "",
        description: "",
        questions: [{ question: "", choices: ["", "", "", ""], correctAnswer: "" }],
    };

    const postForm = () => {
        fetch("http://localhost:3000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Réponse du backend:", data);
            })
            .catch((error) => {
                console.error("Erreur lors de la requête POST:", error);
            });
    };
</script>

<main>
    <form on:submit|preventDefault={postForm}>
        <label>
            Nom de la catégorie:
            <input bind:value={category.name} name="name" />
        </label>

        <label>
            Description de la catégorie:
            <textarea bind:value={category.description} name="description"></textarea>
        </label>

        {#each category.questions as { question, choices, correctAnswer }, index}
            <div>
                <label>
                    Question {index + 1}:
                    <input
                        bind:value={question}
                        name={`${index + 1}`}
                    />
                </label>

                <label>
                    Réponse correcte {index + 1}:
                    <input
                        bind:value={correctAnswer}
                        name={`${index + 1}`}
                    />
                    choix de reponse {index + 1}:
                    <input
                        bind:value={choices[0]}
                        name={`${index + 1}`}
                    />
                    choix de reponse {index + 2}:
                    <input
                        bind:value={choices[1]}
                        name={`${index + 1}`}
                    />
                    choix de reponse {index + 3}:
                    <input
                        bind:value={choices[2]}
                        name={`${index + 1}`}
                    />
                    choix de reponse {index + 4}:
                    <input
                        bind:value={choices[3]}
                        name={`${index + 1}`}
                    />
                </label>
            </div>
        {/each}

        <button type="submit">Envoyer</button>
    </form>
</main>
