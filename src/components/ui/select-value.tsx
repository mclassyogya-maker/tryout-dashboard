export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {}

export default function SelectValue({ ...props }: SelectValueProps) {
  return <span {...props} />
}
