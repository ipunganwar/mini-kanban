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
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" @click="doing">Doing</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="destroy">Delete</button>
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
    doing () {
      taskRef.child(this.taskDetail['.key']).update({status: 'doing'})
    }
  },
  computed: {
    get () {
      console.log(this.taskDetail)
    }
  }

}
</script>

<style>

</style>
