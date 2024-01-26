<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchQuestions } from '../lib/utils'; 
    import Timer from './Timer.svelte';
    import QuestionCard from './QuestionCard.svelte';

    let questions: { text: string; choices: string[]; response: string }[] = [];
    let indexQuestion: number = 0;
    let incorrectChoice: string = "";
    let resetTimer: () => void;

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
            resetTimer();
        }
    }
</script>
<Timer onTimeout={nextQuestion} bind:resetTimer />
{#if questions.length > 0}
    <QuestionCard question={questions[indexQuestion]} onSelect={validAnswer}  incorrectChoice={incorrectChoice} />
{/if}