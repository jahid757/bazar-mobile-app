const BASE = {
    fontSize: 17,
    // fontFamily: 'Arial',
}
const BASE_BOLD = {
    // fontFamily: 'Arial',
    fontSize: 17,
    fontWeight: 'bold',
}
// const BOLD = {
//     fontFamily: 'Arial',
// }

export const textPreset ={
    default: BASE,
    bold: BASE_BOLD,
    h1:{
        ...BASE_BOLD,
        fontSize: 30,
    },
    h2:{
        ...BASE_BOLD,
        fontSize: 25,
    },
    h3:{
        ...BASE_BOLD,
        fontSize: 20,
    },
    p:{
        ...BASE,
        fontSize: 17,
    },
    small:{
        ...BASE,
        fontSize: 14,
    }
}