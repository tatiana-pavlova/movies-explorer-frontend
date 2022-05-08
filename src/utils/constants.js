export const RegexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

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

export const MaxShortFilmDuration = 40;

export const NumberOfInitialCardsForLargeScreen = 12;
export const NumberOfInitialCardsForMediumScreen = 8;
export const NumberOfInitialCardsForSmallScreen = 5;
export const NumberOfAdditionalCardsForLargeScreen = 3;
export const NumberOfAdditionalCardsForSmallScreen = 2;

export const LargeScreenMinWidth = 850;
export const MediumScreenMinWidth = 500;

export const MinNameLength = 2;
export const MaxNameLength = 30;
export const MinPasswordLength = 8;

export const MinutesPerHour = 60;
