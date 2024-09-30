function isPalindrome(str){
    /* Seu código aqui */
    const umaPalavra = str.toLowerCase().replaceAll(" ", "")  
    const ultimaPalavra = umaPalavra.length;
        for (let i = 0; i <= ultimaPalavra; i++){
            if(umaPalavra[i] !== umaPalavra[ultimaPalavra - 1 - i]){
                return false;
            }
        }      
                 return true;
}

function arrayMaxMin(arr){
    /* Seu código aqui */
    let arrMax = arr[0];
    let len = arr.length;
    let arrMin = arr[len - 1];
        for (let i = 0; i <= len; i++) {
            if (arr[i] > arrMax) {
                arrMax = arr[i];
    }       else {
                arrMax = arrMax;
    }
            if (arr[i] < arrMin) {
                arrMin = arr[i];
    }       else {
                arrMin = arrMin;
    }
  }
    let newArr = [arrMin, arrMax];
                return newArr;
}
