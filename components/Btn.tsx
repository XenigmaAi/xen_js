/*
    Liscences & Copyrights:
        Copyright 2024 - (C) Xenigma
        CODEOWNER - Abdullah Rajput
        This is a standard liscence but you can purchase professional liscence by reaching us at our email.
    Note:
        If you see any error contact us at: helpworkagents@gmail.com  
*/

import Image from 'next/image';
import React from 'react';

interface BtnProps {
  btnText: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => void;
  onDblClick?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => void;
  className?: string;
  type?: 'default' | 'success' | 'danger' | 'primary' | 'secondary';
  disabled?: boolean;
  title?: string;
  btnIconWidth?: number;
  onRightClick?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => void;
  onAuxClick?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => void;
  onChange?: (e: React.MouseEvent<HTMLButtonElement>, ...args: any[]) => void;
  btnIconHeight?: number;
  btnIcon?: string;
}

const Btn: React.FC<BtnProps> = ({ btnText, onClick, onDblClick, disabled, onRightClick, onAuxClick, onChange, btnIconHeight = 22, btnIconWidth = 22, btnIcon, title, className, type = 'default' }) => {
    const baseStyle = 'px-3 py-2 rounded bg-[#f0f0f0] text-black';
    const arbitraryStyles = "flex items-center justify-center";
    let typeStyle = '';

    switch (type) {
        case 'success':
          typeStyle = disabled ? 'bg-green-400 text-grey cursor-not-allowed' : 'bg-green-600 text-white';
          break;
        case 'primary':
            typeStyle = disabled ? 'bg-blue-400 text-white cursor-not-allowed' : 'bg-blue-500 text-white backdrop-blur-sm';
            break;
        case 'danger':
          typeStyle = disabled ? 'bg-red-400 text-white cursor-not-allowed' : 'bg-red-500 text-white';
          break;
        case'secondary':
            typeStyle = disabled ? 'bg-orange-400 text-[#f0f0f0] cursor-not-allowed' : 'bg-orange-500 text-white'
            break;
        case 'default':
        default:
          typeStyle = disabled ? 'bg-[grey] text-[white] cursor-not-allowed' : 'bg-[black] text-white transition-all';
          break;
      }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onContextMenu={onRightClick}
      onDoubleClick={onDblClick}
      onAuxClick={onAuxClick}
      onChange={onChange}
      title={title}
      className={`${arbitraryStyles} ${baseStyle} ${typeStyle} ${className}`}
    >
      {btnIcon && <Image src={btnIcon} alt='BtnIcon' width={btnIconWidth} height={btnIconHeight} className='mr-1.5' />}
      {btnText}
    </button>
  );
};

export default Btn;
