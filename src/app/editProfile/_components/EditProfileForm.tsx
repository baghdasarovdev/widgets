'use client';

import { type ChangeEventHandler, type FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { type Session } from 'next-auth';
import { signIn } from 'next-auth/react';

import { editProfile, updateAvatar } from '@/app/editProfile/_api/actions';
import styles from '@/app/editProfile/page.module.scss';

type EditProfileFormPropsT = {
  data: Session;
};

export const EditProfileForm: FC<EditProfileFormPropsT> = ({ data }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { dirtyFields },
  } = useForm();

  useEffect(() => {
    if (data.user)
      reset({ ...data.user.profile, loginName: data.user.username });
  }, [data.user, reset]);

  const onSubmit = async (formData: any) => {
    const changedFields: Record<string, string> = {};

    Object.keys(dirtyFields).forEach(
      (el) => (changedFields[el] = formData[el]),
    );

    await editProfile(
      JSON.stringify({ profile: { ...data?.user?.profile, ...changedFields } }),
      data?.user?.token,
      data?.user?.id,
    );

    await signIn('zitadel');
  };

  const onAvatarChange: ChangeEventHandler = async (e) => {
    const img = (e.target as unknown as { files: FileList }).files[0];
    const body = new FormData();

    body.append('file', img);

    await updateAvatar(body, data?.user?.token);
    await signIn('zitadel');
  };

  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          alignItems: 'center',
          marginInline: 'auto',
        }}
      >
        <div
          style={{
            borderRadius: '9999px',
            overflow: 'hidden',
            width: '80px',
            height: '80px',
          }}
        >
          <img
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            src={data.user.profile.avatar}
          />
        </div>
        <input type="file" onChange={onAvatarChange} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.profileForm}>
        <div className={styles.formGroup}>
          <label htmlFor="givenName">Given Name</label>
          <input
            id="givenName"
            type="text"
            placeholder="Enter your given name"
            required
            {...register('givenName')}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="familyName">Family Name</label>
          <input
            id="familyName"
            type="text"
            placeholder="Enter your family name"
            required
            {...register('familyName')}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="displayName">Display Name</label>
          <input
            id="displayName"
            type="text"
            placeholder="Enter your display name"
            required
            {...register('displayName')}
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            Save Changes
          </button>
        </div>
      </form>
      <Image
        style={{ display: 'none' }}
        alt="1"
        className="hidden"
        src="https://picsum.photos/id/237/200/300"
        width={40}
        height={40}
      />
    </div>
  );
};
