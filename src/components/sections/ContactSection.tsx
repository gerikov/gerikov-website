
import { cn } from '../../lib/utils'
import { maxWidth } from '../../config'
import Label from '../common/Label'

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <section className={cn('py-10 mx-auto px-4 md:px-6 lg:px-8', maxWidth)}>
        <div className='flex justify-center mb-10'>
            <Label>Contact</Label>
        </div>
    </section>
  )
}

export default ContactSection