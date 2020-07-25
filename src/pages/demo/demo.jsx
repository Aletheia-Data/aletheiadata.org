import React from "react";

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
  ErrorBoundary,
  Facet,
  SearchProvider,
  SearchBox,
  PagingInfo,
  ResultsPerPage,
  Paging,
  WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  getConfig,
  getFacetFields
} from "../../config/config-helper";

// style
import '../../components/Cards/style.css'

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};

export default function Demo() {
  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched,setSearchTerm,results }) => ({ wasSearched,setSearchTerm,results })}>
        {({ wasSearched,setSearchTerm,results }) => {
          console.log(results);
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={<SearchBox autocompleteSuggestions={true} />}
                  sideContent={
                    <div>
                      {getFacetFields().map((field, i) => {
                        // left sidebar cat names
                        return(
                          <Facet key={field} field={field} label={field} />
                        )
                      })}
                    </div>
                  }
                  bodyContent={
                    results &&
                    results.map((r, i) =>{
                      let result = r;
                      return (
                        <div className="container" key={`card_${i}}`}>
                          <div className="courses-container">
                              <div className="course">
                                  <div className="course-preview">
                                      <h6>{ result.categoriacargo.raw }</h6>
                                      <h2>{ result.nombres.raw } { result.apellidos.raw }</h2>
                                      <a href="#">View all details <i className="fas fa-chevron-right"></i></a>
                                  </div>
                                  <div className="course-info">
                                      <h6>{ result.institucion.raw }</h6>
                                      <pre><ul>
                                          <li><b>Descargo:</b> { result.desccargo.raw }</li>
                                          <li><b>Fecha Designacion:</b> { result.fecha_designacion.raw }</li>
                                          <li><b>Fecha Primer Cargo:</b> { result.fechaprimercargo.raw }</li>
                                          <li><b>Nivel Escolar:</b> { result.nivel_escolar.raw }</li>
                                          <li><b>Sueldo Neto:</b> { result.sueldoneto.raw }</li>
                                          <li><b>Tipo Cargo:</b> { result.tipodecargo.raw }</li>
                                          <li><b>Tipo Carrera:</b> { result.tipodecarrera.raw }</li>
                                          <li><b>Tipo Empleado:</b> { result.tipoempleado.raw }</li>
                                      </ul></pre>
                                      <button className="btn">RD$ { result.sueldobase.raw }</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      )
                    })      
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage options={[5, 10, 15]} />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}
