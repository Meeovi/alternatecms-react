<!--export function Files() {
    return (
  <div>
    <form method="POST" @submit.prevent="updateAgreement()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement.id)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Agreement" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Agreement</a>
          </div>
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody v-for="agreement in findManyAgreements" :key="agreement.id">
                    <tr>
                      <td style="text-align: right;">Agreement Name</td>
                      <td>
                        <input type="text" id="name" required :value="agreement.name" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Agreement Type</td>
                      <td>
                        <select name="agreementType" id="agreementType" :value="agreement.type">
                          <option value="policies">Policies</option>
                          <option value="agreements">Agreements</option>
                          <option value="announcements">Announcements</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Excerpt</td>
                      <td>
                        <textarea id="excerpt" :value="agreement.excerpt" cols="50" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Detail</td>
                      <td>
                        <client-only>
                          <Editor :value="agreement.content" />
                        </client-only><br>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input v-html="agreement.image" type="image" name="headshot" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

 )
}

export default Files

<script>
  import gql from 'graphql-tag'
  import findManyAgreements from '~/graphql/query/findManyAgreements'
  //import { updateOneAgreements } from '~/graphql/code/agreements'
  import Editor from '~/components/Editor.vue'

  const UPDATE_AGREEMENTS = gql `
    mutation updateOneAgreements($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!,$user_id: String!, $reference_id: String!, $shop_id: String!){
    updateOneAgreements(data: {reference_id: $reference_id, user_id: $user_id, shop_id: $shop_id, content: $content, excerpt: $excerpt, image: $image, type: $type, name: $name}, where: {id: $id}) {
    name
      excerpt
      type
      content
      image
      reference_id
      user_id
      shop_id
  }
}`

  const DELETE_AGREEMENTS = gql `
    mutation deleteOneAgreements($id: BigInt!){
        deleteOneAgreements(where: {id: $id}) {
        id
      }
    }`

  export default {
    components: {
      Editor
    },
    head: {
      title: 'Edit Agreement'
    },
    /*   mounted() {
          this.forceRerender();
        },
        // eslint-disable-next-line vue/order-in-components
        data() {
          return {
            componentKey: 0
          }
        },
        methods: {
          async deleteAgreement(agreement) {
            await this.$apollo.mutate({
              mutation: deleteOneAgreements,
              variables: {
                id: agreement.id
              },
              refetchQueries: [{
                  query: findManyAgreements
                }

              ]
            }).then(() => {
              this.$router.push({
                path: '../../admin/marketing/agreements'
              })
            }).catch(err => console.log(err));
          },
          async updateAgreement(agreement) {
            await this.$apollo.mutate({
              mutation: updateOneAgreements,
              variables: {
                id: agreement.id
              },
              refetchQueries: [{
                  query: findManyAgreements
                }

              ]
            }).then(() => {
              this.$router.push({
                path: '../../admin/marketing/agreements'
              })
            }).catch(err => console.log(err));
          },
          forceRerender() {
            this.componentKey += 1;
          },
        //},*/
    apollo: {
      findManyAgreements: {
        query: findManyAgreements,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      }
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
-->

export function Files() {
    return (
  <div>
    <Agreement />
  </div>

 )
}

export default Files

<script>
//import { applyReactInVue } from 'vuereact-combined'
//const Agreement = applyReactInVue(require('./agreements'))
import Vue from 'vue';
import VueReact from 'vue-react';
import Agreement from './agreement';
 
Vue.use(VueReact);

Vue.react('Agreement', Agreement)

export default {
  //components: { Agreement },
}
</script>