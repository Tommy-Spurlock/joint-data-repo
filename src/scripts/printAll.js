// Function to print to the DOM
import objectString from "./objectString.js"
import apiManager from "./apiManager.js"

const printAll = () => {
    apiManager.getInfo()
    .then((objectsReturned) => {
        objectsReturned.forEach(singleObject => {
            // console.log(singleObject)
            // console.log(objectsReturned)
            document.querySelector("#print-here").innerHTML += objectString(singleObject)


    })

    })
    }
//     console.log(apiManager.getInfo()
//     )
// }


    export default printAll