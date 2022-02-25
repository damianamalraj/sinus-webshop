<template>
    <div class="footer">
        <div>
            <p>Logo</p>
            <p>Om Oss</p>
            <p>Hjälp</p>
            <p>Faq</p>
            <img src="../assets/deliver.svg" alt="" />
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
    background-color: gray;
}

.footer div {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    color: white;
    width: 100%;
}
</style>
