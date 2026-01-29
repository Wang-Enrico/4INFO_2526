export const tronca = (str, l) => {
    str.touppercase()
        if (str.length > l) {
            return str.slice(0, l) + '...';
        }
        return str;
    }