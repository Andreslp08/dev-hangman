
export class WordService {
    /**
     * 
     * @param {string} word 
     * @param {string} letter 
     * @returns 
     */
    static hasLetter(word = '', letter = '') {
        return word.includes(letter);
    }
    /**
     * 
     * @param {string} word 
     * @param {string} letter 
     * @returns 
     */
    static getLetterIndex(word = '', letter = '') {
        const chars = word.split('');
        const indexes = [];
        chars.forEach((char,i)=>{
            if(char === letter){
                indexes.push(i)
            }
        })
        return indexes;
    }
        /**
     * 
     * @param {string} word 
     * @param {string} letter 
     * @returns 
     */
         static areEqual(word = '', secondWord='') {
            return word.toLowerCase() === secondWord.toLowerCase();
        }
}
