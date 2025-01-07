import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { EditProfileForm } from '@/app/editProfile/_components/EditProfileForm';
import { authOptions } from '@/auth';

const EditProfile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/hosting');

  return <EditProfileForm data={session} />;
};

export default EditProfile;
