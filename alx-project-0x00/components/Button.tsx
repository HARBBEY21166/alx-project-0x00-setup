// components/Button.tsx
import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium', 
  shape = 'rounded-md' 
}) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }

  return (
    <button 
      className={`
        ${sizeClasses[size]}
        ${shape}
        bg-blue-500 
        text-white 
        hover:bg-blue-600 
        transition-colors
      `}
    >
      {title}
    </button>
  )
}

export default Button