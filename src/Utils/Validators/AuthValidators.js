export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "Email can't be empty."
    if (!re.test(email)) return 'Ooops! We need a valid email address.'
    return ''
}
export function nameValidator(name) {
    if (!name || name.length <= 0) return "Name can't be empty."
    return ''
}
export function passwordValidator(password) {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!password || password.length <= 0) return "Password can't be empty."
    if( !regex.test(password)) return "Password must be atleast 8 characters and with a symbol, uppercase letter, lowercase letter and a number"
    return ''
}
