import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { SearchBar } from 'vtex.store-components'

import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState('')

  // eslint-disable-next-line no-console
  console.log('Mi slug seleccionado es', slug)

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="flex">
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Que estás Buscando?"
        displayMode="search-and-clear-buttons"
      />
    </div>
  )
}

export default DepartmentSearch
