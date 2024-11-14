import Counter from '@/components/counter'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'

export default function Home() {
  return (
    <main className='flex-col-center h-full w-full gap-2'>
      <Typography variant='h1'>A Boilerplate</Typography>
      <Typography>
        This is a boilerplate for creating Next.js applications with TypeScript, Tailwind CSS,
        Zustand, and more.
      </Typography>
      <Counter />
      <div className='absolute bottom-10 flex w-full items-center justify-center gap-2'>
        <Button variant='ghost'>Github</Button>
      </div>
    </main>
  )
}
