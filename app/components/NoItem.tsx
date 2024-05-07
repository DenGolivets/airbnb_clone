import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { FileQuestion, Plus } from 'lucide-react'
import React from 'react'
import { createAirbnbHome } from '../actions';
import Link from 'next/link';

interface NoItemProps {
  title: string;
  description: string;
  createPath: boolean;
}

const NoItem = async ({ title, description, createPath }:NoItemProps ) => {

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const createHomeWithId = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  return (
    <div className='flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 
    text-center animate-in fade-in-50 mt-10'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
        <FileQuestion className='h-10 w-10 text-primary' />
      </div>
      <h2 className='mt-6 text-xl font-semibold'>
        {title}
      </h2>
      <p className='mt-2 text-center text-sm leading-6 text-muted-foreground'>
        {description}
      </p>
      {createPath ? (
        <form action={createHomeWithId} className='mt-10'>
        <button type='submit'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-primary/10'>
            <Plus className='h-8 w-8 text-primary cursor-pointer' />
          </div>        
        </button>
      </form>
      ) : (
        <Link href={'/'}>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mt-10'>
            <Plus className='h-8 w-8 text-primary cursor-pointer' />
          </div>
        </Link>
      )}
    </div>
  )
}

export default NoItem