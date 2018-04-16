<template>
    <div>
      <p>HOMEPAGE</p>
    </div>
</template>

<script>
    import SelectorComponent from '../cells/selector/selector.vue';
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
           SelectorComponent
        }

    }
</script>
