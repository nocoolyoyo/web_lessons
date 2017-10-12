<script>
    import Router from 'vue-router'
    export default {
        data () {
            return {
                pageName:  'HtmlDOM',
            }
        },
        methods: {
            onSelect: function (name) {
                this.$router.push({ name: name})
            },
        }
    }
</script>
<template>
    <Menu :active-name="pageName" @on-select="onSelect">
        <MenuItem name="HtmlDOM">HtmlDOM</MenuItem>
        <MenuItem name="CSS">CSS</MenuItem>
        <MenuItem name="Javascript">Javascript</MenuItem>
        <MenuItem name="framework">前端框架</MenuItem>
    </Menu>
</template>