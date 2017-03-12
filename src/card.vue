<template>
    <div class="card">
        I am a card
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'card'
    }
</script>