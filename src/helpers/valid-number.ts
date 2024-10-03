export function isAValidPhoneNumber(number: string): boolean {
  //eslint-disable-next-line
  return /^[\d\+\-\(\) ]+$/.test(number);
}