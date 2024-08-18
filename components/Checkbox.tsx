/*
    Liscences & Copyrights:
        Copyright 2024 - (C) Xenigma
        CODEOWNER - Abdullah Rajput
        This is a standard liscence but you can purchase professional liscence by reaching us at our email.
    Note:
        If you see any error contact us at: helpworkagents@gmail.com  
*/

import React, { useState } from 'react';

interface CheckboxProps {
  defaultChecked?: boolean;
  description: string;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
  onDblClick?: () => void;
  onAuxClick?: () => void;
  onRightClick?: () => void;
  onCheck?: (checked: boolean) => void;
  required?: boolean;
  width?: string; // Custom width
  title?: string;
  height?: string; // Custom height
  checkboxColor?: string; // Custom Checkbox color
  descriptionColor?: string;
  checkmarkColor?: string;
  [key: string]: any; // Allows for additional props if needed
}

const Checkbox: React.FC<CheckboxProps> = ({
  defaultChecked = false,
  description = '',
  onChange = () => {},
  onClick = () => {},
  onDblClick = () => {},
  onCheck = () => {},
  onAuxClick = () => {},
  onRightClick = () => {},
  width = '24px', // Default width
  title,
  required,
  height = '24px', // Default height
  checkmarkColor = "white",
  checkboxColor = 'bg-blue-500', // Default color
  descriptionColor = '#242020', // Default description color
  ...props
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);; // Call the onChange callback with the new checked value
    if (onCheck) onCheck(newChecked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <span
        className={`inline-block ${width} ${height} border border-gray-300 rounded-md select-none transition duration-150 ease-in-out ${checkboxColor} relative mt-[1px]`}
        style={{ width, height }}
      >
        <input
          type="checkbox"
          onClick={onClick}
          checked={checked}
          onDoubleClick={onDblClick}
          onContextMenu={onRightClick}
          onAuxClick={onAuxClick}
          title={title}
          onChange={handleChange}
          required={required}
          className="absolute opacity-0 w-full h-full cursor-pointer"
          {...props}
        />
        {checked && (
          <svg
            className={`absolute inset-0 m-auto w-[100%] h-[100%] text-${checkmarkColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      {description && <span className={`font-medium text-[${descriptionColor}] select-none`} title={title}>{description}</span>}
    </label>
  );
};

export default Checkbox;