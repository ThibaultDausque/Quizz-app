export const nameRegex: RegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{1,30}+$/; 
export const descriptionRegex : RegExp = /^([A-Za-z0-9\s\-.,]{1,200}+)$/;
export const questionRegex : RegExp = /^[a-zA-Z ]{1,200}\??$/;
export const answerRegex : RegExp =  /^[a-zA-Z0-9]+$/;

export function validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
}

export function validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
}