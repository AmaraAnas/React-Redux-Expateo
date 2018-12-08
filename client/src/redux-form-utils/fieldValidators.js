export const optional = () => undefined;

export const required = (value) => (value ? undefined : 'required');

export const regexTest = (regex, error) => (value) =>
  value !== null && value !== undefined && regex.test(value)
    ? undefined
    : error;

export const minLength = (len) =>
  regexTest(
    new RegExp(`(\\w|\\W){${len},}$`, 'i'),
    `Must not be less than ${len}`,
  );

export const maxLength = (len) =>
  regexTest(
    new RegExp(`^(\\w|\\W){0,${len}}$`, 'i'),
    `Must not be more than ${len}`,
  );

export const withMinAlpha = (len) =>
  regexTest(
    new RegExp(`(.*[a-z]){${len},}.*`, 'i'),
    `Must contain at least ${len} alphabetic char`,
  );

export const withMinNumeric = (len) =>
  regexTest(
    new RegExp(`(.*\\d){${len},}.*`, 'i'),
    `Must contain at least ${len} numeric char`,
  );

export const withMinSpecial = (len) =>
  regexTest(
    new RegExp(`\\W{${len},}`, 'i'),
    `Must contain at least ${len} special char`,
  );

export const withMinUpper = (len) =>
  regexTest(
    new RegExp(`(.*[A-Z]){${len},}.*`),
    `Must contain at least ${len} uppercased char`,
  );

export const withMinLower = (len) =>
  regexTest(
    new RegExp(`(.*[a-z]){${len},}.*`),
    `Must contain at least ${len} lowercase char`,
  );

// TODO: Remove or test them. WARN about duplicata
// const hasNumber = (value) => {
//   return new RegExp(/[0-9]/).test(value);
// };

// const hasMixed = (value) => {
//   return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
// };

// const hasSpecial = (value) => {
//   return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
// };

// export const strengthColor = (count) => {
//   if (count == -1) return '';

//   if (count < 2) return 'red';

//   if (count < 4) return 'orange';

//   if (count < 6) return 'green';
// };

// export const strengthIndicator = (value) => {
//   let strengths = 0;
//   if (value.length == 0) strengths = -1;

//   if (value.length > 12) strengths++;

//   if (hasNumber(value)) strengths++;

//   if (hasSpecial(value)) strengths++;

//   if (hasMixed(value)) strengths++;

//   return strengths;
// };
