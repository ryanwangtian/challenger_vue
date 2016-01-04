<template>
    <a class="mdl-raised-button">
        <slot></slot>
    </a>
</template>

<script>
    module.exports = {
        props: {
        },
        data: function() {
            return {
            }
        },
        computed: {
        },
        methods: {
        }
    };
</script>

<style>
    .mdl-raised-button {
        border: none;
        border-radius: 2px;
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 12px 30px;
        margin: 10px 1px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        outline: 0;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        background: #fff;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }
    .mdl-raised-button:hover {
        background: #f0f0f0;
    }
</style>

