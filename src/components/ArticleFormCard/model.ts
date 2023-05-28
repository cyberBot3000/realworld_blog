export const maxTitleLength = (v: string) => v.length < 200 || 'max length is 200';
export const notOnlySpaces = (v: string) => v.trim().length > 0 || v.length === 0 || 'not only spaces required';
export const requiredMessage = 'this field is required';
