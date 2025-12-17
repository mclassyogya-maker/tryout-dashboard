export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button 
      style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.2s'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
