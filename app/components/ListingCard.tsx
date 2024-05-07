import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useCountries } from '../lib/getCountries';
import { AddToFavoriteButton, DeleteFromFavoriteButton } from './SubmitButtons';
import { DeleteFromFavorite, addToFavorite } from '../actions';

interface ListingCardProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
  userId: string | undefined;
  isInFavoriteList: boolean;
  favoriteId: string;
  homeId: string;
  pathName: string;
}

const ListingCard = ({ imagePath, description, location, price, userId, favoriteId, isInFavoriteList, homeId, pathName }: ListingCardProps) => {

  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <div className='flex flex-col'>
      <div className='relative h-72'>
        <Image 
          src={`https://oqtkyotheuzurrbnmmhb.supabase.co/storage/v1/object/public/images/${imagePath}`} 
          alt='' 
          fill 
          className='rounded-lg object-cover' 
        />
        {userId && (
          <div className='z-10 absolute top-2 right-2'>
            {isInFavoriteList ? (
              <form action={DeleteFromFavorite}>
                <input type="hidden" name="favoriteId" value={favoriteId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <DeleteFromFavoriteButton />
              </form>
            ) : (
              <form action={addToFavorite}>
                <input type="hidden" name="homeId" value={homeId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="pathName" value={pathName} />
                <AddToFavoriteButton />
              </form>
            )}
          </div>
        )}
      </div>
      <Link href={`/home/${homeId}`} className='mt-3'>
        <h3 className='font-medium text-base'>
          {country?.flag} {country?.label} / {country?.region}
        </h3>
        <p className='text-muted-foreground text-sm line-clamp-2'>
          {description}
        </p>
        <p className='pt-2 text-red-500'>
          ${price} <span className='text-black'>Night</span>
        </p>
      </Link>
    </div>
  )
}

export default ListingCard