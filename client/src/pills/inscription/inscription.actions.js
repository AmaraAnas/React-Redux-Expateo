const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};

const hasMixed = (value) => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
};

const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};

export const strengthColor = (count) => {
  if (count == -1) return '';

  if (count < 2) return 'red';

  if (count < 4) return 'orange';

  if (count < 6) return 'green';
};

export const strengthIndicator = (value) => {
  let strengths = 0;
  if (value.length == 0) strengths = -1;

  if (value.length > 12) strengths++;

  if (hasNumber(value)) strengths++;

  if (hasSpecial(value)) strengths++;

  if (hasMixed(value)) strengths++;

  return strengths;
};
