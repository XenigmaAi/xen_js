import React from 'react'

interface LabelProps {
    htmlFor?: string;
    className?: string;
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onRightClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onAuxClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({className, htmlFor, children, id, onAuxClick, onClick, onRightClick, onDoubleClick}) => {
  return (
    <label
        htmlFor={htmlFor}
        className={className}
        id={id}
    >
        {children}
    </label>
  )
}

export default Label