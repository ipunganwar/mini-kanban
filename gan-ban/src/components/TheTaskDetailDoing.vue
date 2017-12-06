<template>
  <div class="modal fade" id="modalDoing" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Detail task</h4>
      </div>
      <div class="modal-body">
        <p>Description: {{this.taskDetail.desc}} </p>
        <p>Point: {{this.taskDetail.point}} </p>
        <p>Assign To: {{this.taskDetail.assign}} </p>
        <p>{{this.taskDetail['.key']}}</p>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-dismiss="modal" @click="todo">Todo</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="destroy">Delete</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" @click="done">Done</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { taskRef } from '../firebase'
export default {
  props: ['taskDetail'],
  firebase: {
    task: taskRef
  },
  methods: {
    destroy () {
      taskRef.child(this.taskDetail['.key']).remove()
    },
    done () {
      taskRef.child(this.taskDetail['.key']).update({status: 'done'})
    },
    todo () {
      taskRef.child(this.taskDetail['.key']).update({status: 'todo'})
    }
  }
}
</script>
