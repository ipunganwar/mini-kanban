<template>
  <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">New Task</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" placeholder="Enter title" v-model="title">
          </div>
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" placeholder="Enter Description" v-model="desc">
          </div>
          <div class="form-group">
            <label>Point</label>
            <input type="text" class="form-control" placeholder="0" v-model="point">
          </div>
          <div class="form-group">
            <label>Assigned to</label>
            <input type="text" class="form-control" placeholder="Assigned to" v-model="assign">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="submit" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { taskRef } from '../firebase'
export default {
  data () {
    return {
      title: '',
      desc: '',
      point: '',
      assign: ''
    }
  },
  methods: {
    submit () {
      taskRef.push({
        title: this.title,
        desc: this.desc,
        point: this.point,
        assign: this.assign,
        status: 'backlog'
      })
      this.title = ''
      this.desc = ''
      this.point = ''
      this.assign = ''
      this.edit = ''
    }
  }

}
</script>

<style>

</style>
