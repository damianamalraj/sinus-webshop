<template>
    <div>
        <div class="homeStyle">
            <img src="../assets/home.jpeg" alt="" />
            <div class="centered">Limited Addition!!</div>
        </div>
        <div class="limitedAddition">
            <div class="card">
                <router-link to="/skateboards">
                    <div class="bild">
                      <!-- $FEEDBACK: No inline styling -->
                        <img
                            src="http://localhost:5001/images/sinus-skateboard-fire.png"
                            alt="skate"
                            style="width: 100%"
                        />
                    </div>
                </router-link>
                <div>
                    <h1>Skateboard</h1>

                    <p class="limitP">
                        Just in time for the holidays, Polo Ralph Lauren
                        presents its Limited Edition Polo Bear Skateboard Deck
                        Collection, 7 Days, 7 Decks..
                    </p>
                </div>
            </div>
            <router-link to="/clothes" class="card">
                <div class="bild">
                    <img
                        src="http://localhost:5001/images/sinus-totebag-gretaedition.png"
                        alt="skate"
                        style="width: 100%"
                    />
                </div>
                <h1>Clothes</h1>

                <p class="limitP">
                    SJust in time for the holidays, Polo Ralph Lauren presents
                    its Limited Edition Polo Bear Skateboard Deck Collection, 7
                    Days, 7 Decks...
                </p>
            </router-link>
        </div>
        <h2>About us</h2>
        <p>
            Vår skateboardavdelning uppdateras varje vecka med nya brädor, hjul,
            truckar & tillbehör. Vi handplockar vårt sortiment för att alltid ha
            ett brett utbud för alla typ av åkarning street, park, transition &
            bowl! Målet är att vi ska tillhandahålla allt du behöver för att
            köpa skateboard oavsett om du är nybörjare eller en duktig åkare.
        </p>

        <div class="images">
            <img src="../assets/bild1.jpeg" alt="" />
            <img src="../assets/bild2.jpeg" alt="" />
            <img src="../assets/bild3.jpeg" alt="" />
            <div class="buynow">
                <router-link to="/products"
                    ><button>Buy Now!</button></router-link
                >
            </div>
        </div>

        <p class="fewCompanies">Companies we work with:</p>
        <div class="fonticon">
            <i class="fas fa-band-aid"></i>
            <i class="fas fa-cat"></i>
            <i class="fas fa-dragon"></i>
            <i class="far fa-clock"></i>
            <i class="fas fa-clock"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",

    computed: {
        product() {
            return this.$store.state.singleProduct;
        },
    },
};
</script>

<style scoped lang="scss">
.limitedAddition {
    width: 100%;
    display: flex;
    flex-direction: row;
    .card {
        box-shadow: 0 15px 15px teal;
        border: 1px solid green;
        max-width: 500px;

        margin: 5rem auto;
        text-align: center;

        display: flex;
        flex-direction: column;
        .bild {
            height: 30rem;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                overflow: hidden;
            }
        }
    }
}
.limitP {
    line-height: 150%;
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
    0% {
        color: rgb(244, 7, 7);
    }
    25% {
        color: yellow;
    }
    50% {
        color: rgb(18, 18, 178);
    }
    100% {
        color: rgb(176, 119, 5);
    }
}
img {
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
    box-shadow: 0 15px 15px teal;
    border: 1px solid green;
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
