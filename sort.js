const arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

// const sortSelection = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let min = i
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             if (arr [j] <= arr[min]) {
//                 min =  j
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[min]
//         arr[min] = temp
//     }
//     return arr
// }

const sortInsertion = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let extracted = i
        debugger
        for (let j = extracted; j >= 0; j--) {
            debugger
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] =  temp
            }
        }
    }
    return arr

}


// console.log(sortInsertion(arr));


const recursive = (i) => {
    if (i < 10) { // MAXIMUM CALL STACK KALAU DIKASIH 100000000000000000000000000000000000000000000000000000000000
        console.log(i);
        i++
        recursive(i)
    }
}

// recursive(0)
for (let index = 0; index < 100000000000000000000000000000000000000000000000000000000000; index++) {
    console.log(index);
    
}