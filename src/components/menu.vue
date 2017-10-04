<script>

    export default {
        data () {
            return {
                pageName:  'html',
            }
        },
    }
</script>
<template>
    <Menu :active-name="pageName" >
        <MenuItem name="html">Html</MenuItem>
        <MenuItem name="dom">Dom</MenuItem>
        <MenuItem name="css">CSS</MenuItem>
        <MenuItem name="Javascript">Javascript</MenuItem>
        <MenuItem name="browser">浏览器</MenuItem>
        <MenuItem name="framework">前端框架</MenuItem>
    </Menu>
</template>