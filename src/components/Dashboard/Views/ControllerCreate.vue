<template>
<form>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <!-- <div class="card-header">
          <h4 class="card-title">Create a plan</h4>
        </div> -->
        <div class="card-content">
          <form class="form-horizontal">
          <legend>Create a controller</legend>
            <fieldset>
              <div class="form-group" >
                <label class="col-sm-2 control-label">Plant Name</label>
                <div class="col-sm-3">
                  <input type="text" placeholder="Plant Name" class="form-control" v-model='planname'>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <center>
          <button class="btn btn-fill btn-danger">
            <a @click='createPlan' style="color:white"> Create a controller </a>
          </button>
          <hr>
        </center>
      </div>  <!-- end card -->
    </div> <!-- end col-md-12 -->
  </div>
</form>  
</template>
<script>
 
</script>
<style>
</style>
