/*

The simulation etc use integers and integer array indices to represent days

*/

export const DAY_NAMES  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const integerToDayName = i => DAY_NAMES[i]

export const getDayName = dateObj => {
    const day = dateObj.getDay()
    return integerToDayName(day)
}