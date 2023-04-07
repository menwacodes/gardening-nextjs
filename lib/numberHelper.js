export const numToFrac = num => {
    if (num === .125) return "1/8";
    if (num === .25) return "1/4";
    if (num === .5) return "1/2";
    return num;
};