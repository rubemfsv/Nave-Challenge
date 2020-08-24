interface Response {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export function logIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjNWFkM2U1LTc4ZTAtNDNiMi1iNTc0LTUxYWViMTAzZTViNyIsImVtYWlsIjoicnViZW1AbmF2ZS5ycyIsImlhdCI6MTU5ODIwODM4MH0.nhyYGpqG4atPJ9oVQGvxcOwPuFZUmquIc4rRLxM6uPg',
        user: {
          email: 'rubem@nave.rs',
          password: 'nave1234',
        },
      });
    }, 2000);
  });
}
