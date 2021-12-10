import { useMemo } from 'react';

import './styles/Switch.css'
import { RandomID } from '../../utility/Helpers';

const Switch = ({name, value, label, keypress, focus, required, readonly, onChange}) => {

  const id = useMemo(() => RandomID(), [])
  
  return (
    <label class="switch">
      <input 
      id={id}
      name={name}
      onKeyPress={keypress} 
      focus={focus}
      checked={value}
      onChange={onChange}
      required={required}
      readOnly={readonly}
      type="checkbox" />
      <span>{label}</span>
    </label>
  )
}

export default Switch;