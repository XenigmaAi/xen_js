import React from 'react';

interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'file' | 'search' | 'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'color' | 'range' | 'submit';
    value?: string;
    className?: string;
    placeholder?: string;
    inputWidth?: string;
    title?: string;
    id?: string;
    name?: string;
    readonly?: boolean;
    disabled?: boolean;
    required?: boolean;
    max?: number;
    min?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRightClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    type = 'text',
    className = '',
    value,
    inputWidth,
    title,
    placeholder,
    id,
    name,
    disabled,
    required,
    readonly,
    max,
    min,
    onRightClick,
    onChange,
    onClick,
    onDoubleClick
}) => {
    const baseStyles = "px-3 py-2 rounded-md border-solid border-2 border-gray-400 outline-none focus:border-gray-600 ";
    const submitButtonStyles = "outline-none bg-blue-500 cursor-pointer text-white rounded-md px-2 py-3"
    const rangeInputStyles = "width-[250px] border-none outline-none bg-gray-300 h-2"
    // Custom styles specifically for width
    const customWidthStyle = inputWidth ? { width: inputWidth } : {};

    // Custom styles specifically for file input
    const fileInputStyles = "px-3 py-2 rounded-md border-solid border-2 border-gray-400 bg-white text-gray-700 cursor-pointer";

    // Enhanced styles specifically for color input
    const colorInputStyles = "w-full p-0 rounded-md border-2 border-gray-300 bg-white cursor-pointer focus:outline-none hover:border-gray-500 focus:border-blue-500 transition-colors duration-150 ease-in-out";

    return (
        <input
            type={type}
            className={`${className} ${
                type === 'file' ? fileInputStyles :
                type === 'submit'? submitButtonStyles :
                type === 'range'? rangeInputStyles :
                type === 'color' ? colorInputStyles :
                baseStyles
            }`}
            style={customWidthStyle}
            placeholder={placeholder}
            value={type !== 'file' ? value : undefined}
            onClick={onClick}
            title={title}
            id={id}
            name={name}
            disabled={disabled}
            required={required}
            maxLength={max}
            minLength={min}
            onContextMenu={onRightClick}
            readOnly={readonly}
            onDoubleClick={onDoubleClick}
            onChange={type !== 'file' ? onChange : undefined}
        />
    );
}

export default Input;
