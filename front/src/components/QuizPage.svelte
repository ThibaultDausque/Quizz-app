<script lang="ts">
    import { fetchQuestions } from '$lib/utils'; 
    import QuestionCard from './QuestionCard.svelte';
    let questions: { text: string; choices: string[]; response: string }[] = [];
    let indexQuestion: number = 0;

    fetchQuestions()
        .then((data) => {
            questions = data;
        })
        .catch((error: Error) => {
            console.error(
                "Erreur lors de la récupération des questions:",
                error,
            );
        });

    function validAnswer(choice: string, isCorrect: boolean): void {
        console.log(`Utilisateur a choisi : ${choice}, Correct : ${isCorrect}`);
        if (isCorrect) {
            console.log("Bonne réponse !");
        } else {
            console.log("Mauvaise réponse.");
        }
        nextQuestion();
    }

    function nextQuestion(): void {
        if (indexQuestion < questions.length - 1) {
            indexQuestion += 1;
        }
    }
</script>

{#if questions.length > 0}
    <QuestionCard question={questions[indexQuestion]} onSelect={validAnswer} onTimeout={nextQuestion} />
{/if}