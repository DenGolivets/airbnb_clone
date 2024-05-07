'use client'

import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const Counter = ({ name }: { name: string }) => {

  const [amount, setAmount] = useState(0);

  function moreCount() {
    setAmount(amount + 1)
  }

  function lessCount() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  } 

  return (
    <div className='flex items-center gap-x-4 lg:border lg:border-gray-200 lg:rounded-lg mt-2 lg:mt-0'>
      <input type="hidden" name={name} value={amount} />
      {amount ? (
        <Button variant='outline' type='button' size='icon' onClick={lessCount}>
          <Minus className='h-4 w-4 text-primary' />
        </Button>
      ) : (
        <Button variant='outline' type='button' size='icon' onClick={lessCount} disabled>
          <Minus className='h-4 w-4 text-primary' />
        </Button>
      )}
      <p className='font-medium text-lg'>
        {amount}
      </p>
      <Button variant='outline' type='button' size='icon' onClick={moreCount}>
        <Plus className='h-4 w-4 text-primary' />
      </Button>
    </div>
  )
}

export default Counter