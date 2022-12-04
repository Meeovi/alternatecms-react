export function Files() {
    return (
  <div>
    <table class="table">
      <tbody class="row">
        <tr class="col">
          <td>
            <label for="workspaces">Workspace</label><br>
            <select id="category" v-model="workspaces">
              <option v-for="workspaces in findManyWorkspaces" :key="workspaces.id" :value="workspaces">
                {{ workspaces.name }}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

 )
}

export default Files

<script>
  import Editor from '~/components/Editor.vue'

  export default {

    components: {
      Editor
    },
  }

</script>

<style>

</style>
