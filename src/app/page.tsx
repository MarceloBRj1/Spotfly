import { Home as HomeIcon, Search, LibraryBig, MoreHorizontal, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2      } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <div className='flex flex-1'>
        <aside className='w-64 bg-zinc-950 p-6'>
          <div className='flex items-center mb-4 '>
            <a href="
            ">
            <MoreHorizontal/>
            </a>
          </div>
          <nav className='space-y-4'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 '>
              <HomeIcon />
              Início</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 '>
              <Search />
              Buscar</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200 '>
              <LibraryBig />
              Biblioteca</a>
          </nav>

          <nav className='mt-6 pt-6 border-t flex flex-col gap-3'>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Awesome Mix</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Hits Brasil</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hydrogen Antigas</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>No Repeat</a>
          </nav>

        </aside>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className=' p-1 rounded-full bg-black/40'>
              <ChevronLeft />
            </button>
            <button className=' p-1 rounded-full bg-black/40'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Boa Tarde</h1>

          <div className='grid grid-cols-3 gap-4'>
            <a href='#' className='flex items-center bg-white/5 group rounded hover:bg-white/10 overflow-hidden'>
            <Image 
            alt='Capa do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>Musicas curtidas</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button>
               </a>
            <a href='#' className=' transition-colors flex items-center group bg-white/5 rounded hover:bg-white/10 overflow-hidden'>
            <Image 
            alt='Capa do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>Awesome mix</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button></a>
            <a href='#' className=' transition-colors flex items-center group bg-white/5 rounded hover:bg-white/20 overflow-hidden'>
            <Image 
            alt='Capa do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>No Repeat</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button></a>
            <a href='#' className=' transition-colors flex items-center group bg-white/5 rounded hover:bg-white/20 overflow-hidden'>
            <Image 
            alt='Capa do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>lofi Beats</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button></a>
            <a href='#' className=' transition-colors flex items-center group bg-white/5 rounded hover:bg-white/10 overflow-hidden'>
            <Image 
            alt='Capa do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>Hydrogen Antigas</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button></a>
            <a href='#' className=' transition-colors flex items-center group bg-white/10 rounded hover:bg-white/10 overflow-hidden'>
            <Image 
            alt='Foto do Álbum Kanye West'
            src="/YE.png" 
            width={100}
            height={100}
            />
               <strong className='ml-4'>Top Brasil</strong>
               <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black/20 ml-auto mr-8 invisible group-hover:visible '>
                <Play fill='bg-black' />
               </button></a>

          </div>

          <h2 className='mt-10 font-bold text-3xl'>Paradas</h2>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded hover:bg-white/10'>
            <Image alt='Capa do Álbum Kanye West' className=' w-full' src="/YE.png" width={2000} height={2000}
            />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Kanye West the Creator</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded hover:bg-white/10'>
            <Image alt='Capa do Álbum Kanye West' className=' w-full' src="/aa.jpg" width={2000} height={2000}
            />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Kanye West the Creator</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded hover:bg-white/10'>
            <Image alt='Capa do Álbum Kanye West' className=' w-full' src="/aa.jpg" width={2000} height={2000}
            />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Kanye West the Creator</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded hover:bg-white/10'>
            <Image alt='Capa do Álbum Kanye West' className=' w-full' src="/aa.jpg" width={2000} height={2000}
            />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Kanye West the Creator</span>
            </a>
            <a href='#' className='bg-white/5 flex flex-col gap-2 p-3 rounded hover:bg-white/10'>
            <Image alt='Capa do Álbum Kanye West' className=' w-full' src="/aa.jpg" width={2000} height={2000}
            />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Kanye West the Creator</span>
            </a>


          </div>
        </main>
      </div>
      <footer className='bg-zinc-800 border-zinc-700 p-6 flex items-center justify-between'>
       <div className='flex items-center gap-5'>
       <Image 
            alt='Foto do Álbum Kanye West'
            src="/YE.png" 
            width={70}
            height={70}
            />
            <div className='flex flex-col gap-1'>
            <strong className='hover:underline cursor-pointer font-normal hover:'>I Wonder</strong>
            <span className='text-xs text-zinc-400 cursor-pointer hover:underline'>Kanye West</span>
            </div>
       </div>
       <div className='flex flex-col items-center'>
        <div className='flex items-center gap-4'>
          <Shuffle className='text-zinc-200' />
          <SkipBack className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black'>
            <Play fill='black' />
          </button>
          <SkipForward className='text-zinc-200' />
          <Repeat className='text-zinc-200'  />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:41</span>
          <div className='rounded-full w-96 h-1 bg-zinc-700'> 
          <div className='bg-zinc-100 w-20 h-1 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-400'>4:02</span>
        </div>
       </div>
       <div className='flex items-center gap-4'>
          <Mic2  size={25}/>
          <LayoutList size={25} />
          <Laptop2  size={25}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>  
            <div className='rounded-full w-14 h-1 bg-zinc-700'> 
            <div className='bg-zinc-100 w-12 h-1 rounded-full'></div>
          </div>
          </div>
          <Maximize size={25} />
       </div>
       </footer>
    </div>
  )
}
