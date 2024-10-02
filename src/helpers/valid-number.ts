export function isAValidPhoneNumber(number: string): boolean {
  return /^[\d\+\-\(\) ]+$/.test(number);
}