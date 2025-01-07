/* eslint-disable absolute-imports/only-absolute-imports */
import Image from 'next/image';
import Link from 'next/link';

import { LogoIcon } from '@/assets/icons/LogoIcon';

import NotFountImage from '../../public/images/404-image.gif';

export default async function NotFound() {
  return (
    <div>
      <div className="m-auto mt-3 w-full max-w-200 justify-center px-4">
        <div className="flex items-center">
          <LogoIcon />
          <div className="ml-2.5 mt-3 text-base font-black leading-normal text-blue-300 md:text-xl">
            Vermieterbereich
          </div>
        </div>
      </div>
      <div className="w-full max-w-200 px-4 pt-12 md:m-auto md:flex">
        <div className="max:max-w-md">
          <div>
            <h1 className="text-9xl font-extrabold md:text-9xl">Oops!</h1>
            <h2 className="mb-3 mt-5 text-3xl font-normal">
              We can't seem to find the page you're looking for.
            </h2>
            <h6 className="mb-3 mt-5 font-semibold">Error code: 404</h6>
            <ul>
              <li>Here are some helpful links instead:</li>
              <li>
                <Link href="/hosting" className="text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hosting/listings" className="text-blue-300">
                  Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={NotFountImage} alt="not found" />
        </div>
      </div>
    </div>
  );
}
