<template>
<div>
  <div class="panel-body" v-for="task of tasks" :key="task['.key']">
    <div class="thumbnail" v-if="task.status == 'backlog'">
      <div class="caption" >
        <h2 class="panel-title"><b>{{task.title}}</b></h2>
      </div>
      <div class="panel-body">
        <p>Point: {{task.point}} </p>
        <p>Assign To: {{task.assign}} </p>
        <div>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalBack">
            Show detail
          </button>
        </div>
      </div>
      <TheTaskDetailBack :taskDetail = "task"/>
    </div>
  </div>
  </div>
</template>

<script>
import { taskRef } from '../firebase'
import TheTaskDetailBack from '@/components/TheTaskDetailBack'

export default {
  props: ['task'],
  components: {
    TheTaskDetailBack
  },
  firebase: {
    tasks: taskRef
  }
}
</script>
