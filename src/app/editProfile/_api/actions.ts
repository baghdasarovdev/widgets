'use server';

export const editProfile = async (
  body: string,
  token: string,
  userId: string,
) => {
  try {
    const res = await fetch(
      `${process.env.ZITADEL_ISSUER}/v2/users/human/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body,
      },
    );

    return await res.json();
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const updateAvatar = async (body: FormData, token: string) => {
  try {
    await fetch(`${process.env.ZITADEL_ISSUER}/assets/v1/users/me/avatar`, {
      method: 'POST',
      body,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.error(e);

    return null;
  }
};
