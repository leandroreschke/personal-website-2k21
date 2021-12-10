import { useMemo } from 'react';

import './styles/Radio.css'
import { RandomID } from '../../utility/Helpers';

const Radio = ({name, label, keypress, focus, required, readonly, checked, onChange}) => {

  const id = useMemo(() => RandomID(), [])
  
  return (
    <label class="radio">
      <input 
      id={id}
      name={name}
      onKeyPress={keypress} 
      focus={focus}
      defaultChecked={checked}
      onChange={onChange}
      required={required}
      readOnly={readonly}
      type="radio" />
      <span>{label}</span>
    </label>
  )
}

export default Radio;