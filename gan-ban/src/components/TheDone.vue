<template>
  <div>
    <div class="panel-body" v-for="task of tasks" :key="task['.key']">
      <div class="thumbnail" v-if="task.status == 'done'">
        <div class="caption" >
          <h2 class="panel-title"><b>{{task.title}}</b></h2>
        </div>
        <div class="panel-body">
          <p>Point: {{task.point}} </p>
          <p>Assign To: {{task.assign}} </p>
          <div>
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalDoing">
              Show detail
            </button>
          </div>
        </div>
        <TheTaskDetailDoing :taskDetail = "task"/>
      </div>
    </div>
  </div>
</template>

<script>
import { taskRef } from '../firebase'
import TheTaskDetailDoing from '@/components/TheTaskDetailDoing'

export default {
  props: ['task'],
  components: {
    TheTaskDetailDoing
  },
  firebase: {
    tasks: taskRef
  }
}
</script>
