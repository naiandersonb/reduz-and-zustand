import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'
import { useCurrentLesson, useStore } from '../zustand-store'

export function VideoPlayer() {
  const { currentLesson } = useCurrentLesson()
  const {isLoading, next } = useStore(state => {
    const { isLoading, next } = state
    return { isLoading, next }
  })

  const handlePlayNext = () => {
    next()
  }

  return(
    <div className='w-full bg-zinc-500 aspect-video'>
      {isLoading ? (
        <div className='flex h-full items-center justify-center'>
          <Loader className='w-6 h-6 text-zinc-400 animate-spin' />
        </div>
      ):(
        <ReactPlayer
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          width='100%' 
          height='100%' 
          playing
          controls 
        />
      )}
  </div>
  )
}