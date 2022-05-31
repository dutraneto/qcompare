import * as React from 'react'

export const useInputControl = (initialValues) => {
  const [values, setValues] = React.useState(initialValues)

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.id]: e.target.value
      })
    }
  ]
}
