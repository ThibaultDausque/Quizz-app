<script lang="ts">
    import QuestionCard from "../components/QuestionCard.svelte";
    import { fetchQuestions } from "../lib/utils";
    
    let questions: { text: string; choices: string[]; response: string }[] = [];
    let indexQuestion = 0;

    fetchQuestions()
        .then((data) => {
            questions = data;
        })
        .catch((error) => {
            console.error(
                "Erreur lors de la récupération des questions:",
                error,
            );
        });

    function validAnswer(choice: string, isCorrect: boolean) {
        console.log(`Utilisateur a choisi : ${choice}, Correct : ${isCorrect}`);
        if (isCorrect) {
            alert("Bonne réponse !");
        } else {
            alert("Mauvaise réponse.");
        }
        if (indexQuestion < questions.length - 1) {
            indexQuestion += 1;
        }
    }
</script>

{#if questions.length > 0}
    <QuestionCard question={questions[indexQuestion]} onSelect={validAnswer} />
{/if}
