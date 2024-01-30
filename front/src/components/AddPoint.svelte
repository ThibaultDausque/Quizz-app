<div class="point">
    <p>+ 1</p>
</div>

<style>
    .point {
        position: relative;
        left: 60%;
        top: -100px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: wheat;
        animation: bounce-out-top 0.8s both;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p { 
        font-size: 40px;
        font-weight: bold;
        color: #4a0857;
    }
    @keyframes bounce-out-top {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        60% {
            transform: translateY(-100px);
            opacity: 1;
        }
        100% {
            transform: translateY(-120px);
            opacity: 0;
        }
    }
</style>
