export function Files() {
    return (
  <div>
    <form @submit.prevent="addProject()">
      <nav class="navbar">
        <div class="container-fluid">
          <tr class="col-lg-6 navbar-brand">
            <td>
              <input v-model="name" type="text" required value="Project Name"
                style="width:500px !important; color: white; background-color: transparent;" />
            </td>
          </tr>

          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Project" /></a>
        </div>
      </nav>
      <br>
      <tr style="float: right; right: 0px;">
        <td>
          <label for="doing">Project Status: </label>
          <select id="doing" v-model="doing">
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="at risk">At Risk</option>
            <option value="on hold">On Hold</option>
            <option value="completed">Completed</option>
          </select>
        </td>
      </tr>
      <br>
      <br>
      <div class="row w-100">
        <div class="col-3">
          <!-- Tab navs -->
          <div class="nav flex-column nav-tabs text-center" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" id="v-tab-1-tab" data-mdb-toggle="tab" href="#v-tabs-1" role="tab"
              aria-controls="v-tabs-1" aria-selected="true">Overview</a>
            <a class="nav-link" id="v-tab-2-tab" data-mdb-toggle="tab" href="#v-tabs-2" role="tab"
              aria-controls="v-tabs-2" aria-selected="false">Tasks</a>
            <a class="nav-link" id="v-tab-3-tab" data-mdb-toggle="tab" href="#v-tabs-3" role="tab"
              aria-controls="v-tabs-3" aria-selected="false">Board</a>
            <a class="nav-link" id="v-tab-4-tab" data-mdb-toggle="tab" href="#v-tabs-4" role="tab"
              aria-controls="v-tabs-4" aria-selected="false">Timeline</a>
            <a class="nav-link" id="v-tab-5-tab" data-mdb-toggle="tab" href="#v-tabs-5" role="tab"
              aria-controls="v-tabs-5" aria-selected="false">Calendar</a>
            <a class="nav-link" id="v-tab-6-tab" data-mdb-toggle="tab" href="#v-tabs-6" role="tab"
              aria-controls="v-tabs-6" aria-selected="false">Workflow</a>
            <a class="nav-link" id="v-tab-7-tab" data-mdb-toggle="tab" href="#v-tabs-7" role="tab"
              aria-controls="v-tabs-7" aria-selected="false">Goals</a>
            <a class="nav-link" id="v-tab-8-tab" data-mdb-toggle="tab" href="#v-tabs-8" role="tab"
              aria-controls="v-tabs-8" aria-selected="false">Reviews</a>
            <a class="nav-link" id="v-tab-9-tab" data-mdb-toggle="tab" href="#v-tabs-9" role="tab"
              aria-controls="v-tabs-9" aria-selected="false">Media</a>
            <a class="nav-link" id="v-tab-10-tab" data-mdb-toggle="tab" href="#v-tabs-10" role="tab"
              aria-controls="v-tabs-10" aria-selected="false">Workspaces</a>

          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div class="tab-content" id="v-tabs-tabContent">
            <div class="tab-content" id="ex1-content">
              <div class="tab-pane fade show active" id="v-tabs-1" role="tabpanel" aria-labelledby="v-tabs-1-tab">
                <overview />
              </div>
              <div class="tab-pane fade" id="v-tabs-2" role="tabpanel" aria-labelledby="v-tabs-2-tab">
                <list />
              </div>
              <div class="tab-pane fade" id="v-tabs-3" role="tabpanel" aria-labelledby="v-tabs-3-tab">
                <board />
              </div>
              <div class="tab-pane fade" id="v-tabs-4" role="tabpanel" aria-labelledby="v-tabs-4-tab">
                <timeline />
              </div>
              <div class="tab-pane fade" id="v-tabs-5" role="tabpanel" aria-labelledby="v-tabs-5-tab">
                <calendar />
              </div>
              <div class="tab-pane fade" id="v-tabs-6" role="tabpanel" aria-labelledby="v-tabs-6-tab">
                <workflow />
              </div>
              <div class="tab-pane fade" id="v-tabs-7" role="tabpanel" aria-labelledby="v-tabs-7-tab">
                <goals />
              </div>
              <div class="tab-pane fade" id="v-tabs-8" role="tabpanel" aria-labelledby="v-tabs-8-tab">
                <messages />
              </div>
              <div class="tab-pane fade" id="v-tabs-9" role="tabpanel" aria-labelledby="v-tabs-9-tab">
                <files />
              </div>
              <div class="tab-pane fade" id="v-tabs-10" role="tabpanel" aria-labelledby="v-tabs-10-tab">
                <workspaces />
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
      <br>
    </form><!-- End of Form -->
  </div>

 )
}

export default Files

<script>
  import overview from '~/components/projects/overview'
  import list from '~/components/projects/list'
  import board from '~/components/projects/board'
  import timeline from '~/components/projects/timeline'
  import calendar from '~/components/projects/calendar'
  import workflow from '~/components/projects/workflow'
  import goals from '~/components/projects/goals'
  import messages from '~/components/projects/messages'
  import files from '~/components/projects/files'
  import workspaces from '~/components/projects/workspaces'
  import settings from '~/components/projects/settings'

  export default {
    components: {
      overview,
      list,
      board,
      timeline,
      calendar,
      workflow,
      goals,
      messages,
      files,
      workspaces,
      settings
    },
    layout: 'dashboard',
    head: {
      title: 'Add A Project'
    }
  }

</script>

<style>

</style>
