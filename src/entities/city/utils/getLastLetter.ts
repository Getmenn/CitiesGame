export const getLastLetter = (activeCities: string[]) => {
    const lastCity = activeCities.at(-1);
    if (!lastCity) return null;

    let lastLetter = lastCity.slice(-1);

    if (lastLetter === 'ь' || lastLetter === 'ы' || lastLetter === 'ъ') {
        lastLetter = lastCity.charAt(lastCity.length - 2);
    }

    return lastLetter;
};
