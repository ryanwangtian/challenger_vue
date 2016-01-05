<template>
    <div class="mdl-textfield"
        :class="{ 'is-focused': focused, 'inputed': inputed, 'disabled': disabled }">
        <label>{{hintText}}</label>
        <input v-el:input
            :type="type"
            :disabled="disabled"
            v-model="value"
            @focus="onFocus"
            @blur="onBlur">
        <div class="clear-button"
            v-show="focused && inputed"
            @click="clearText"
            transition="fade">
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            value: { type: String, twoWay: true, default: '' },
            hintText: { type: String },
            type: { type: String, default: 'text' },
            disabled: {type: Boolean, default: false}
        },
        data: function() {
            return {
                focused: false
            }
        },
        computed: {
            inputed: function() {
                if (!this.value || this.value === '') {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {
            onFocus: function() {
                this.focused = true;
            },
            onBlur: function() {
                this.focused = false;
            },
            clearText: function() {
                this.value = '';
                this.$els.input.focus();
            }
        }
    };
</script>

<style>
    .mdl-textfield {
        position: relative;
        margin: 5px 0;
    }
    .mdl-textfield.disabled {
        cursor: pointer;
    }
    .mdl-textfield label {
        position: absolute;
        top: 30px;
        font-size: 16px;
        color: #ccc;
        transition: top .3s ease-out;
    }
    .mdl-textfield.is-focused label,
    .mdl-textfield.inputed label {
        top: 10px;
        font-size: 12px;
    }
    .mdl-textfield.is-focused label {
        color: rgb(0, 188, 212);
    }
    .mdl-textfield input {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        border: 0;
        background-color: transparent;
        background-image: linear-gradient(rgb(0, 188, 212), rgb(0, 188, 212)), linear-gradient(#ccc, #ccc);
        background-size: 0 2px, 100% 1px;
        background-position: 50% 100%, 50% 100%;
        background-repeat: no-repeat, no-repeat;
        transition: background .3s ease-out;
        outline: none;
        font-size: 16px;
    }
    .mdl-textfield.is-focused input {
        background-size: 100% 2px, 100% 1px;
    }

    .mdl-textfield .clear-button {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #555;
        position: absolute;
        right: 4px;
        bottom: 8px;
        cursor: pointer;
    }
    .mdl-textfield .clear-button:before,
    .mdl-textfield .clear-button:after {
        position: absolute;
        content: "";
        display: block;
        width: 10px;
        height: 1px;
        left: 3px;
        top: 7.5px;
        background: #fff;
    }
    .mdl-textfield .clear-button:before {
        transform:rotate(45deg);
    }
    .mdl-textfield .clear-button:after {
        transform:rotate(-45deg);
    }

    .fade-transition {
        transition: all .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>
