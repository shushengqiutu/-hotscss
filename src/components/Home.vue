

<template>
    <div v-text="title"></div>
</template>
<script>
 import {getMusic} from "../api"
import axios from "axios"
export default {
     data(){
         return{
             title:"首页"
         }
     },
   async  created(){
       try {
           const a = await getMusic({
               phone:"13379156493",
               password:"1337915669711"
           });
           console.log(a)
       }   catch (e){
           alert(e.message)
       }

     }



}
</script>
<style lang="scss" scoped>

 div{
    width: px2rem(375);
    background-color:red;
    font-size: px2rem(30);

 }

</style>



