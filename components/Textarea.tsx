import React from 'react'

interface TextareaProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    className?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    max?: number;
    noResize?: boolean;
    min?: number;
    onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onDblClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onRightClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onAuxClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
    placeholder,
    value,
    onChange,
    rows = 8,
    cols = 45,
    className,
    disabled,
    max,
    min,
    onClick,
    required,
    readonly,
    onDblClick,
    onAuxClick,
    name,
    id,
    noResize,
    onRightClick,
    onFocus
}) => {
    const baseStyle = "border-2 border-gray-400 outline-none rounded-md px-3 py-2 focus:border-gray-600"
    const resizeStyle = noResize ? 'resize-none' : '';

  return (
    <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        className={`${className} ${baseStyle} ${noResize && resizeStyle}`}
        disabled={disabled}
        maxLength={max}
        minLength={min}
        required={required}
        readOnly={readonly}
        onClick={onClick}
        onAuxClick={onAuxClick}
        name={name}
        id={id}
        onDoubleClick={onDblClick}
        onContextMenu={onRightClick}
        onFocus={onFocus}
    />
  )
}

export default Textarea