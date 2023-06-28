import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-3xl pt-10 mx-auto'>
      <div className='flex justify-between items-center w-full flex-col-reverse md:flex-row'>
        <div className='py-2 w-full lg:flex relative '>
          <Image
            src="/adjusted-bg.png"
            alt='author'
            width={500}
            height={500}
            priority={true}
            className={` w-full mx-auto sm:w-[60%] md:w-[70%] lg:w-[75%]`}
          />
        </div>

        <div className='w-full flex flex-col justify-center items-center md:items-start md:justify-start py-3  '>
          <p className='text-xl md:text-lg'>Hello I am</p>
          <span className=' text-3xl md:text-4xl lg:text-5xl'>John Mark Abad</span>
          <p className='text-xl md:text-lg'>a student, aspiring to be programmer</p>
        </div>
      </div>
    </div>
  )
}
