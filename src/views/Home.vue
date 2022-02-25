<template>
    <div > 
        <div class="homeStyle"> 
            <img src="../assets/home.jpeg" alt="">
            <div class="centered">Limited Addition!! Skynda er !!</div>
        </div>
        <div class="limitedAddition">
            <div class="card">
                <div>
                    <img src="../assets/bild1.jpeg" alt="Jeans" style="width:100%"></div>
                <div>
                    <h1> skateboard</h1>
               
                     <p>Just in time for the holidays, Polo Ralph Lauren presents its Limited Edition Polo Bear 
                    Skateboard Deck Collection, 7 Days, 7 Decks..</p>
                </div>
            </div>
            <div class="card">
                <img src="../assets/bild1.jpeg" alt="Jeans" style="width:100%">
                <h1> clothes</h1>
                
                <p>SJust in time for the holidays, Polo Ralph Lauren presents its Limited Edition Polo Bear 
                    Skateboard Deck Collection, 7 Days, 7 Decks...</p>
            </div>
        </div>
        <h2>About us</h2>
        <p>
            Vår skateboardavdelning uppdateras varje vecka med nya brädor, hjul, truckar & tillbehör. Vi handplockar vårt sortiment för 
            att alltid ha ett brett utbud för alla typ av åkarning street, park, transition & bowl!
             Målet är att vi ska tillhandahålla allt du behöver för att köpa skateboard oavsett om du är nybörjare eller en duktig åkare.</p>
        <div class="homepage">
            <SingleProductSmall :product='product'/>
            <SingleProductSmall :product='product'/>
            <SingleProductSmall :product='product'/>
            <SingleProductSmall :product='product'/>
            <SingleProductSmall :product='product'/>
        </div>

        <div class="images">
            <img src="../assets/bild1.jpeg" alt="">
            <img src="../assets/bild2.jpeg" alt="">
            <img src="../assets/bild3.jpeg" alt="">
            <div class="buynow"><button>Buy Now!!</button></div>
        </div>

           <p class="fewCompanies">Few companies we work with:</p>
           <div class="fonticon">
                <i class="fas fa-band-aid" ></i>
                <i class="fas fa-cat"></i>
                <i class="fas fa-dragon"></i>
                <i class="far fa-clock"></i>
                <i class="fas fa-clock"></i>
            </div>
    </div>
</template>

<script>
import SingleProductSmall from '../components/Single-Product-Small.vue';

export default {
    name: "Home",
    components: {SingleProductSmall},

    computed: {
        product() {
            return this.$store.state.singleProduct},
    },

}
</script>

<style scoped lang="scss">
.limitedAddition {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 2rem;
}
    .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
    text-align: center;
    font-family: arial;
    display: flex;
    flex-direction: column;
}


.homeStyle {
    position: relative;
}
.centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        color: rgb(247, 247, 247);
        animation-name: example;
        animation-duration: 4s;
}
    @keyframes example {
        0%   {color: rgb(244, 7, 7);}
        25%  {color: yellow;}
        50%  {color: rgb(18, 18, 178);}
        100% {color: rgb(176, 119, 5);}
}
    img{  
        width: 100%;
        height: 18rem;
    }
    .fewCompanies {
        font-size: 3rem;
        font-weight: bold;
    }
    .fonticon {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 3rem;
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .images {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 3rem;
        position: relative;
        img {
            margin: 1rem;
        }

    }
    .buynow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        color: rgb(247, 247, 247);
        animation-name: example;
        animation-duration: 3s;
    }
    .homepage {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 2rem;
    }
    p {
        font-size: 2rem;
        border: 2px solid rgb(5, 108, 142);
        margin: 2rem;
        padding: 1rem;
    }
    h2 {
        font-size: 3rem;
    }
</style>
