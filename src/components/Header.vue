<template>
  <header>
    <div>
      <span class="md-display-3">
        HOMEFIT+DIET
      </span><br />
      <span class="md-subheading">
        eat fit, keep fit
      </span>
    </div>
  </header>
</template>

<script>

export default {
  
  data(){
    return{
        
    }
  },
  props:
  {
    msg:{
        type:String
    }
  }
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background:rgb(185, 222, 195);
  width: 100vw;
  height: 20vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>