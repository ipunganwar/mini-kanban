<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="#">The Gan-Ban</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      <ul class="nav navbar-nav navbar-right">
        <li>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#newTask">
            New Task
          </button></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
  <TheNewTask/>
</nav>
</template>

<script>
import TheNewTask from '@/components/TheNewTask'
export default {
  components: {
    TheNewTask
  }

}
</script>