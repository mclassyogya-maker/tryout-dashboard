export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  onSelect?: (value: string) => void
}

export default function SelectItem({ value, onSelect, children, ...props }: SelectItemProps) {
  return (
    <button
      onClick={() => onSelect?.(value)}
      style={{
        width: '100%',
        padding: '0.5rem 1rem',
        border: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left',
        cursor: 'pointer',
        fontSize: '0.875rem'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
