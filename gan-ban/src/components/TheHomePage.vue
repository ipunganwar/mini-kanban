<template>
  <div class="container">
    <TheNavbar/>
    <div class="row">
      <div class="col-sm-6 col-md-3" >
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Back-Log</h3>
          </div>
          <TheBacklog/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Todo</h3>
          </div>
          <TheTodo/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Doing</h3>
          </div>
          <TheDoing/>
        </div>
      </div>
      <div class="col-sm-6 col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Done</h3>
          </div>
          <TheDone/>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheBacklog from '@/components/TheBacklog'
import TheTodo from '@/components/TheTodo'
import TheDoing from '@/components/TheDoing'
import TheDone from '@/components/TheDone'

export default {
  components: {
    TheNavbar,
    TheBacklog,
    TheTodo,
    TheDoing,
    TheDone
  }
}
</script>

<style>

</style>
