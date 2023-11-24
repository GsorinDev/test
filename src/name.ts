export const greet = (name: string | null) => {
    return name ? `Bonjour, ${name}!` : 'Bonjour, invité!';
}