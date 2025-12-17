import { useState } from 'react'

export interface SelectProps {
  children?: React.ReactNode
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
}

export default function Select({ children, placeholder, value, onValueChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          backgroundColor: 'white',
          fontSize: '0.875rem',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>{value || placeholder}</span>
        <span style={{ marginLeft: '0.5rem' }}>▼</span>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          marginTop: '0.25rem',
          zIndex: 10
        }}>
          {children}
        </div>
      )}
    </div>
  )
}
