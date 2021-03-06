import React from "react"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import Hit from "./Hit"
import * as S from "./styles"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => (
  <S.SearchWrapper>
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <SearchBox autoFocus translations={{ placeholder: "Pesquisa..." }} />
      <Stats
        translations={{
          stats(nbHits, timeSpentMs) {
            return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
          },
        }}
      />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
