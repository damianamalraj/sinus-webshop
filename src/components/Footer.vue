<template>
    <div class="footer">
        <div>
            <img
                class="logo"
                src="http://localhost:5001/images/sinus-logo-portrait.svg"
                alt="logo"
            />
            <router-link to="/contact">Om Oss</router-link>
            <router-link to="/contact">Hjälp</router-link>
            <p>Faq</p>
            <router-link to="/checkout"><img src="../assets/deliver.svg" alt="" /></router-link>
            
            <img src="../assets/thumb.svg" alt="" />
            <img src="../assets/whatsapp.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    padding-right: 1rem;
    background-color: teal;

    height: 4rem;
    display: flex;
    justify-content: flex-end;

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1.5rem;
        color: white;
        width: 100%;
        p {
            text-transform: uppercase;
        }

        .logo {
            height: 2rem;
        }
    }
}
</style>
