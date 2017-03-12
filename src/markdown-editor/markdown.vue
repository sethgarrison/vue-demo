<template>
    <div id="markdown">
        <textarea :value="input" @input="update"></textarea>
        <div class="result" v-html="compiledMarkdown"></div>
    </div>
</template>

<script src="./markdown.component.js"></script>

<style src="./style.scss"></style>