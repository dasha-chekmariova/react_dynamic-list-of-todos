const url = 'https://mate.academy/students-api';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${url}/todos`);

  return response.json();
};

export const getUser = async (userId: number): Promise<User> => {
  const response = await fetch(`${url}/usersq/${userId}`);

  return response.json();
};
