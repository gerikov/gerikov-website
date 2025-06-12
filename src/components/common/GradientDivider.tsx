import { cn } from '../../lib/utils'

type Props = {
  className?: string
}

const GradientDivider = ({ className }: Props) => {
  return <div className={cn(`w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent`, className)} />
}

export default GradientDivider
