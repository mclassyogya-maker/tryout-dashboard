export interface SelectContentProps {
  children: React.ReactNode
}

export default function SelectContent({ children }: SelectContentProps) {
  return (
    <div style={{ padding: '0.5rem 0' }}>
      {children}
    </div>
  )
}
