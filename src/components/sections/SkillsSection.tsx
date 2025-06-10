import Label from '../common/Label'

import wave from '../../assets/patterns/wave.svg'

const SkillsSection = () => {
  return (
    <section className='py-20'>
      <div className='flex justify-center mb-10'>
        <Label>Skills</Label>
      </div>
      <div className='bg-primary p-6 font-medium rounded-xl flex items-center gap-4 max-w-5xl mx-auto relative'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: `url(${wave})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, transparent, #00000022)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, #00000022)',
          }}
        />
        <span className='material-symbols-outlined text-white px-2' style={{ fontSize: '32px' }}>
          charger
        </span>
        <div>
          Design and technology fuel my curiosity every day. I'm always learning—whether it's the latest frontend
          frameworks or fresh design trends—because growth isn't optional; it's essential. For me, great work starts
          with relentless improvement.
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
