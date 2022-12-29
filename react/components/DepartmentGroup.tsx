import React from 'react'

type Props = {
  departments: [Category]
  handleSetSlug: any
}

type Category = {
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  // eslint-disable-next-line no-console
  console.log('Mi grupo de departamentos es:', departments)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term}&map=ft`)
  }

  const departmentOptions: unknown = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select onChange={onHandleSetSlug} defaultValue="value0">
      <option disabled value="value0">
        Seleccione una opción
      </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
