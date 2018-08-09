<template>
  <section class="main-panel">
  <div class="grid">
    <div class="row">
      <subpanel paneltitle="di1" panelcontent="directive_injection"></subpanel>
      <subpanel paneltitle="di2" panelcontent="directive_injection"></subpanel>
      <vfor></vfor>
      <eventvon></eventvon>
    </div>
    <div class="row">
      <bindhtml></bindhtml>
      <bindcss></bindcss>
      <computedprop></computedprop>
      <condif></condif>
    </div>
    <div class="row">
      <filtered></filtered>
      <register1></register1>
      <register2></register2>
    </div>
    <div class="row">
      <compcomsender></compcomsender>
      <compcomsender2></compcomsender2>
      <linkroute></linkroute>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
  </section>
</template>

<style scoped>
  .main-panel{
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
    border:1px solid red;
  }
</style>

<script>
  //testing directive injection value
  import subpanel from 'components/1_directive_injection.vue'
  //testing event and methods
  import eventvon from 'components/2_event_v_on.vue'
  //testing loop for
  import vfor from 'components/3_v_for.vue'
  //testing binding html attribute
  import bindhtml from 'components/4_binding_html_attribute.vue'
  //testing binding css attribute
  import bindcss from 'components/5_binding_css.vue'
  //testing computed property 
  import computedprop from 'components/6_computed_property.vue'
  //testing conditional if
  import condif from 'components/7_conditional_if.vue' 
  //testing filter
  import filtered from 'components/8_filter.vue'
  //testing component comunication
  import compcomsender from 'components/9_component_comunication_send.vue'
  import compcomsender2 from 'components/10_component_comunication_2_send.vue'
  //testing routing and link
  import linkroute from 'components/11_routing_link.vue'
  //testing vuex
  import register1 from 'components/12_vuex_1.vue'
  import register2 from 'components/12_vuex_2.vue'

  export default {
    //--------------part of vuex---------------
    components:{
      subpanel,
      eventvon,
      vfor,
      bindhtml,
      bindcss,
      computedprop,
      condif,
      filtered,
      compcomsender,
      compcomsender2,
      linkroute,
      register1,
      register2
    }
  }
</script>
