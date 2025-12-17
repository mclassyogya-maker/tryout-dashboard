export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SelectTrigger({ ...props }: SelectTriggerProps) {
  return <button {...props} />
}
