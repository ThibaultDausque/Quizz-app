<script lang="ts">
    export let category: any = {};
</script>


    <div class="card">
        <h1>Nom : {category.name}</h1>
        <p>Description : {category.description}</p>
    </div>


<style>
    
    .card {
        animation: fadeInOut 2s ease-in-out;
        margin-top: 15vh;
        padding: 20px;
        box-shadow: 0ch 0ch 10ch 0ch rgba(0, 0, 0, 0.2);
        border-radius: 40px;
        background-color: #f3bc7e;
        box-shadow: rgba(0, 0, 0, 0.2);
    }

    p {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #4a0857;
    }
</style>
