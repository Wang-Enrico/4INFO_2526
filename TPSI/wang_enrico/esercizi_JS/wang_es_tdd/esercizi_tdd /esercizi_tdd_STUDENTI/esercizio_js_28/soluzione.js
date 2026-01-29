export const upper_case = (str) => {
    let result = "";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = lowercase.indexOf(char);
        result += index !== -1 ? uppercase[index] : char;
    }
    
    return result;
};