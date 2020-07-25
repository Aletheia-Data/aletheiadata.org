import React from "react";
const AppSearchClient = require('@elastic/app-search-node')

const apiKey = 'private-scahrd9rg9299cjju3t8bqie'
const baseUrlFn = () => 'https://54ddcdde7f87464bac1f7bfa98e2de1f.app-search.us-east-1.aws.found.io/api/as/v1/'
const client = new AppSearchClient(undefined, apiKey, baseUrlFn)

class Upload extends React.Component{
  constructor(props){
    super(props);


  }

  componentDidMount(){
    const engineName = 'aletheiadata'
    const query = "femenino"
    const searchFields = { genero: {} }
    const resultFields = { generonombgenerores: { raw: {} } }
    const options = { search_fields: searchFields, result_fields: resultFields }

    client
      .listDocuments(engineName, { page: { size: 10, current: 1 } })
      .then(response => console.log(response))
      .catch(error => console.log(error.errorMessages))

      const documentIds = ["doc-5f1c1e715107af5e7216c85f"]
      
      client
        .getDocuments(engineName, documentIds)
        .then(response => console.log(response))
        .catch(error => console.log(error.errorMessages))
  }

  render(){
    return (
      <div>Upload</div>
    );
  }
}

export default Upload;
