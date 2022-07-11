import React from 'react'

const ReactSelect = ({ options }) => {
  return (
    <div>
      <select options={options} classes={{
          selectValue: 'my-custom-value',
          selectArrow: 'my-custom-arrow'
        }} />
    </div>
  )
}

export default ReactSelect