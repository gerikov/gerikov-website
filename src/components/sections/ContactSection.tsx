import { cn } from '../../lib/utils'
import { maxWidth } from '../../config'
import DisplayLabel from '../common/DisplayLabel'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import AnimatedFrame from '../common/AnimatedFrame'

const ContactSection = () => {
  return (
    <section className={cn('py-10 mx-auto px-4 md:px-6 lg:px-8', maxWidth)} id='contact'>
      <div className='flex justify-center mb-10'>
        <DisplayLabel>Contact</DisplayLabel>
      </div>
      <div className='flex justify-between gap-10'>
        <AnimatedFrame className='max-w-xl mx-auto rounded-2xl flex-1'>
          <form className='flex flex-col gap-4 p-8  rounded-2xl w-full bg-gradient-to-t from-primary/10 to-transparent'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea id='message' />
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </AnimatedFrame>
        <div className='flex flex-col flex-1 gap-4'>
          <h3 className='text-2xl font-bold text-text-alter'>Contact me</h3>
          <p className='text-sm text-white/70 max-w-sm'>
            I'm always looking for new opportunities and collaborations. If you have any questions or want to work
            together, please feel free to contact me.
          </p>
          <h3 className='text-2xl font-bold text-text-alter'>Socials</h3>
          <div className='flex flex-col gap-4 text-text-alter'>
            <div className='flex gap-2 items-center'>
              <span className='text-sm text-text-alter '>LinkedIn:</span>
              <a
                href='https://www.linkedin.com/in/gerikov-solutions/'
                target='_blank'
                className='hover:text-primary transition-colors duration-300 font-bold'
              >
                Gergo Kovacs
              </a>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-sm text-text-alter '>GitHub:</span>
              <a
                href='https://github.com/gerikov'
                target='_blank'
                className='hover:text-primary transition-colors duration-300 font-bold'
              >
                gerikov
              </a>
            </div>

            <div className='flex gap-2 items-center'>
              <span className='text-sm text-text-alter '>Email:</span>
              <a
                href='mailto:developer@gerikov.hu'
                target='_blank'
                className='hover:text-primary transition-colors duration-300 font-bold'
              >
                developer@gerikov.hu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
