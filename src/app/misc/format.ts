export function formatStringToSlug(value: string): string {
    const response = value.toLowerCase().replace(/ /g, '-');
    return response;
}

export function formatSlugToString(value: string): string {
    const response = value.replace(/-/g, '%20').replace(/\b\w/g, char => char.toUpperCase());
    return response;
}