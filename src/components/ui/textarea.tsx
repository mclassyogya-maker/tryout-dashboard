export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...props }: TextareaProps) {
  return (
    <textarea 
      style={{
        width: '100%',
        minHeight: '100px',
        padding: '0.75rem 1rem',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontSize: '0.875rem',
        resize: 'vertical'
      }}
      {...props}
    />
  )
}
