'use client'

import { Minus, Plus } from 'lucide-react'

import Typography from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { useCounterStore } from '@/store/counter'

export default function Counter() {
  const { count, decrement, increment } = useCounterStore()

  const handleClear = () => {
    // Clear the counter
    useCounterStore.setState({ count: 0 })
  }

  const handleDouble = () => {
    // Double the counter
    useCounterStore.setState((state) => ({ count: state.count * 2 }))
  }

  return (
    <section className='flex-col-center gap-2'>
      <Typography variant='h2'>Counter</Typography>
      <div className='flex w-full items-center justify-center gap-2'>
        <Button size='icon' onClick={decrement}>
          <Minus />
        </Button>
        <Typography size='xl-black'>{count}</Typography>
        <Button size='icon' onClick={increment}>
          <Plus />
        </Button>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='destructive' onClick={handleClear}>
          Clear
        </Button>
        <Button onClick={handleDouble}>Double</Button>
      </div>
    </section>
  )
}
