const API_URL = `https://itunes.apple.com/search?term=`
const fetchSearch = async (searchTerm) => {
    const response = await fetch(API_URL + searchTerm)
    const resData = await response.json()
    return resData.results
}
//being thatour fetchseach functio return in promise
//we want wrap the promise to take that promise and return in argument
const wrappromise = (promise) => {
    //the defult state of our promise is pending
    let status = "pending"
    // the result will store
    let result = ""
    //our suspender represent the resolution of our promise
    //an ideal reolution should flag the status to "success"
    //our catch should get the error
    let suspender = promise.then(response => {
        status = "success"
        result = response
    }, error => {
        status = "error"
        result = error
    })
    //finally we should planto return an object that emits the status and result
    //a different response depending on the status
    return{
        read(){
            //if the promise hasnot triggerad then run it
            if(status === "pending"){
                throw suspender
        }
        //otherwise send them error
        else if(status === "error"){
            throw result
        }
        //if the status is nethier "pending or "errror "
        //then we should return the result
        return result
    }
    }
}
export const createResource = (searchTerm) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm))
    }
}
