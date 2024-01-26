<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchQuestions } from '$lib/utils'; 
    import QuestionCard from './QuestionCard.svelte';
    let questions: { text: string; choices: string[]; response: string }[] = [];
    let indexQuestion: number = 0;
    let incorrectChoice: string = "";

    onMount(async () => {
        try {
            questions = await fetchQuestions();
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des questions:",
                error,
            );
        }
    });

    function validAnswer(choice: string, isCorrect: boolean) {
        console.log(`Utilisateur a choisi : ${choice}, Correct : ${isCorrect}`);
        if (isCorrect) {
            nextQuestion();
            console.log("Bonne réponse !");
        } else {
            console.log("Mauvaise réponse.");
            incorrectChoice = choice;
        }
    }

    function nextQuestion() {
        if (indexQuestion < questions.length - 1) {
            incorrectChoice = "";
            indexQuestion += 1;
        }
    }
</script>

{#if questions.length > 0}
    <QuestionCard question={questions[indexQuestion]} onSelect={validAnswer} onTimeout={nextQuestion} incorrectChoice={incorrectChoice} />
{/if}