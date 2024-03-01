<script lang="ts">
    import { choicesData } from "$lib/components/Store";
    import PopupForm from "$lib/components/PopupForm.svelte";
    let showPopup: boolean = false;

    export let category = {
        name: "",
        description: "",
        questions: [
            { question: "", choices: ["", "", "", ""], correctAnswer: "" },
        ],
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
                showPopup = true;
            })
            .catch((error) => {
                console.error("Erreur lors de la requête POST:", error);
            });
        const choices = category.questions.map((q) => q.choices);
        choicesData.set(choices.flat());
    };

    const addQuestion = () => {
        category.questions.push({
            question: "",
            choices: ["", "", "", ""],
            correctAnswer: "",
        });
        category.questions = [...category.questions];
    };
</script>

<PopupForm show={showPopup} message="Un nouveau quiz a été créé!" />

<main class="card">
    <form on:submit|preventDefault={postForm}>
        <label class="form">
            Nom de la catégorie :
            <input bind:value={category.name} name="name" />
        </label>

        <label class="form">
            Description de la catégorie :
            <textarea bind:value={category.description} name="description"
             class="form"></textarea>
        </label>
        
        {#each category.questions as { question, choices, correctAnswer }, index}
        <div>
            <label class="form">
                Question {index + 1} :
                <input bind:value={question} name={`${index + 1}`} />
                <button type="button" class="button_form" title="Ajouter une question" on:click={addQuestion}
                >+</button
                >
            </label>
            
            <label>
                <div class="form">
                    Réponse correcte {index + 1} :
                    <input bind:value={correctAnswer} name={`${index + 1}`} />
                </div>

                <div class="form">
                    Choix de réponse {index + 1} :
                    <input bind:value={choices[0]} name={`${index + 1}`} />
                </div>

                <div class="form">
                    Choix de réponse {index + 2} :
                    <input bind:value={choices[1]} name={`${index + 2}`} />
                </div>

                <div class="form">
                    Choix de réponse {index + 3} :
                    <input bind:value={choices[2]} name={`${index + 3}`} />
                </div>

                <div class="form">
                    Choix de réponse {index + 4} :
                    <input bind:value={choices[3]} name={`${index + 4}`} />
                </div>
            </label>
        </div>
        {/each}
        <button type="submit" class="button_form">Envoyer</button>
    </form>
</main>

<style>
    .card {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 15vh;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      width: 50%;
      box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
      border-radius: 40px;
      background-color: #f3bc7e;
      box-shadow: rgba(0, 0, 0, 0.2);
    }

    .button_form {
    width: 100px;
    height: 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: #4a0857;
    color: #f3bc7e;
    font-size:15px;
    font-weight: bold;
    box-shadow:
      0px 10px 13px -7px #000000,
      -19px 50px 0px -7px rgba(0, 0, 0, 0);
    
  }
  button:hover {
    box-shadow: none;
  }

  textarea {
    resize : none;
    height: 20px;
    background-color: #f3e5f5;
    border: none;
  }
  
 .form{
    display: flex;
    justify-content: start;
    gap: 20px;
    padding-top: 10px;
 }

 input{
    border: none;
    background-color: #f3e5f5;
 }
  </style>
