// Find maximum value
export function findMax(array){ 
    let max = 0;
    for (let i = 0; i < array.length; i++)
        {
            if (array[i] > max)
            {
                max = array[i];
            }
        }
    return max;
}
// Reverse array order
export function reverseArray(array){
    array.reverse();
    return array;
}