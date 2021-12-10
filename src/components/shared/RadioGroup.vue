import { useMemo } from 'react';

import './styles/RadioGroup.css'
import { RandomID } from '../../utility/Helpers';

const RadioGroup = ({label, radios, value, onChange}) => {
  const id = useMemo(() => RandomID(), [])

  return (
    <>
      <div id={id} class="radio-group" onChange={onChange}>
        {radios.map((radio, index) => {
          return (
            <label key={index}>
              <input type="radio" name={id + '_' + label} value={radio.value ? radio.value : radio}  checked={radio.value ? radio.value === value : radio === value} />
              <span class="capitalize">{radio.name? radio.name : radio}</span>
            </label>
          )
        })}

      </div>
      <label class="radio-group_label" htmlFor={id}>{label}</label>
    </>
  )
}

export default RadioGroup;