/**
 * Capitalize each word in a text.
 * @param {string} text Text to capitalize.
 * @return {string} Capitalized text
 */
export function capitalizeText(text: string): string {
  return text
    .split(' ')
    .map(
      (word) =>
        `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
    )
    .join(' ')
}
