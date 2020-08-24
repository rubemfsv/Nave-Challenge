import Login from '../pages/Login';

interface Response {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

// export function logIn({ user, token }): Promise<Response> {
//   localStorage.setItem('@Auth:token', token);
//   localStorage.setItem('@Auth:user', user);

//   return new Promise((resolve) => {
//     resolve({
//       token: `${token}`,
//       user: {
//         email: `${user.email}`,
//         password: `${user.password}`,
//       },
//     });
//   });
// }

// function logOut() {
//   localStorage.removeItem('@Auth:user');
//   localStorage.removeItem('@Auth:token');
//   window.location.reload();
// }

export function logIn(): Promise<Response> {
  return new Promise((resolve) => {
    resolve({
      token: `{token}`,
      user: {
        email: `{user.email}`,
        password: `{user.password}`,
      },
    });
  });
}
