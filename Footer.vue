<template>
<div class="footer-place">
    <hr class="hr-footer">
    </hr>
    <div class="footer-wrapper">
        <p class="footer-p">&copy; Wumpa Producer 23 03 2020 Shiny Colors Website Training</p>
    </div>
</div>
</template>

<style scoped>
    .hr-footer{
        width: 100%;
        height: 2px;
        color: white;
        opacity: 70%;
    }
    .footer-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footer > .footer-p{
        font-size: 18px;

    }
</style>

<script>
export default {
    name: "Footer",
    data () {
      return {}
    }
};
</script>