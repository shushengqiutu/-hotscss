 

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
       
       const a= await getMusic(
         { phone:"13379156493", password:"13379156697111" }
       )
      console.log(a) 
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



