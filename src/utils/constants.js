export const regexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const InputsForLogin = [
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'Еmail',
    label: 'Email'
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    label: 'Пароль'
  }
];

export const InputsForRegister = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Имя',
    label: 'Имя'
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Еmail',
    label: 'Email'
  },
  {
    id: 3,
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    label: 'Пароль'
  }
]
