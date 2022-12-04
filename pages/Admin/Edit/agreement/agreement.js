import React, { Component } from 'react';
import { gql, useMutation } from '@apollo/client';
import PeriqlesForm from 'periqles';

class Agreement extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React'
        };
      }
      render() {
        const UPDATE_AGREEMENTS = gql`
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
    }`;
    
      const [updateOneAgreements, response] = useMutation(UPDATE_AGREEMENTS);
    
      return (<div>
         <PeriqlesForm
          mutationName={'updateOneAgreements'}
          useMutation={updateOneAgreements}
         />
      </div>);
    };
}

export default Agreement;