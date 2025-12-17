export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label 
      style={{
        display: 'block',
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#374151'
      }}
      {...props}
    >
      {children}
    </label>
  )
}
