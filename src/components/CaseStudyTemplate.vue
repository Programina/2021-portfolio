<template>
 <v-container class="habits">

    <v-row>
      <v-col>
      <h3>{{}}</h3>
      
      <div v-for="(section, i) in caseStudy.sections">
       <div v-if="caseStudy.enumeration" class="enumeration mt-5">{{i > 10 ? '0' + i : i}}</div>
        <p></p>
      </div>
     
      </v-col>
    </v-row>

 
</template>
<script>
  name: 'CaseStudyTemplate',
  props: {
    caseStudy: {
      type: Object,
      required: true
    }
  },
  data(){
    return {

    }
  }

</script>