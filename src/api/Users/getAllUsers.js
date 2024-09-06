export const getAllUsers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/api`);
  const data = await res.json();
  return data?.users;
};
