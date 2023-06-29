import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-3xl pt-10 mx-auto'>
      <div className='flex justify-between items-center w-full flex-col-reverse mx-auto lg:flex-row'>
        <div className='py-2 w-full '>
          <Image
            src="/adjusted-bg.png"
            alt='author'
            width={500}
            height={500}
            priority={true}
            className={` w-full mx-auto block -z-10 sm:w-[60%] md:w-[50%] lg:w-[75%]`}
          />
        </div>

        <div className='w-full flex flex-col justify-center items-center py-3  '>
          <p className='text-xl md:text-lg'>Hello I am</p>
          <span className=' text-3xl md:text-4xl lg:text-5xl'>John Mark Abad</span>
          <p className='text-xl text-center md:text-lg'>a student, aspiring to be programmer</p>
        </div>
      </div>
    </div>
  )
}
