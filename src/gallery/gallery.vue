<template>
    <div id="keypress"
         tabindex="0"
         @keyup.left="onLeft"
         @keyup.right="onRight"
         @keyup.up="onUp"
         @keyup.down="onDown">
        <h1>MY GALLERY</h1>
        <div class="row" v-for="i in cols">
            <span class="grid"
                  v-for="x in rows"
                  :class="{active: x === startRow && i === startCol}">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gallery',
        data: function() {
            return {
                startCol: 1,
                startRow: 1,
                cols: 10,
                rows: 10
            }
        },
        watch: {
            startCol: function(val) {
                console.log('start col', val);
            },
            startRow: function(val) {
                console.log('start row', val);
            }
        },
        methods: {
            onLeft: function () {
                this.startRow = this.startRow !== 1 ? this.startRow - 1 : 1;
            },
            onRight: function () {
                this.startRow ++;
            },
            onUp: function () {
                this.startCol = this.startCol !== 1 ? this.startCol - 1 : 1;
            },
            onDown: function () {
                this.startCol ++;
            },
            getActive: function(x, y) {
                console.log('x, y', x, y);
                return this.startRow === x && this.startCol === y;
            }
        },
        mounted: function () {
            document.getElementById('keypress').focus();
        }
    }
</script>

<style lang="scss">
    .active {
        background: blue;
    }

    .row {
        display: flex;
    }

    .grid {
        flex: none;
        height: 100px;
        width: 100px;
        border: 1px solid black;
    }
</style>