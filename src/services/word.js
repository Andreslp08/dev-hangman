
export class WordService {
    /**
     * 
     * @param {string} word 
     * @param {string} char 
     * @returns 
     */
    static hasChar(word = '', char = '') {
        return word.toLowerCase().includes(char.toLowerCase());
    }
    /**
     * 
     * @param {string} word 
     * @param {string} char 
     * @returns 
     */
    static getCharIndex(word = '', character = '') {
        const chars = word.split('');
        const indexes = [];
        chars.forEach((char,i)=>{
            if(character.toLowerCase() === char.toLowerCase()){
                indexes.push(i)
            }
        })
        return indexes;
    }
        /**
     * 
     * @param {string} word 
     * @param {string} secondWord 
     * @returns 
     */
         static areEqual(word = '', secondWord='') {
            return word.toLowerCase() === secondWord.toLowerCase();
        }
}
