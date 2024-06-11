// concatenate class names
export function cc(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
