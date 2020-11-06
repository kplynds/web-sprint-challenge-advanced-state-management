export const FORM_CHANGE = "FORM CHANGE";

export function formChange(value) {
    return {
        type: FORM_CHANGE,
        payload: value
    }
}