import { CATEGORIES_DATA } from "../static/categories"


export class RandomService{
/**
 * Devuelve una categoria de manera random y sus palabras.
 */
 static getRandomCategory(){
    const length = CATEGORIES_DATA.length;
    const random = Math.floor(Math.random()*length);
    return CATEGORIES_DATA[random]?CATEGORIES_DATA[random]:CATEGORIES_DATA[0];
}


/**
 * Devuelve una palabra aleatoria en base a el id de la categoria, si no existe el id o no se pasa el parametro, devuelve una palabra de cualquier categoria.
 @param {string} categoryId = id de la categoria .
 */
 static getRandomWord(categoryId){
     let word = '';
     const category = CATEGORIES_DATA.find(category=> category?.id === categoryId);
     if(categoryId && Array.isArray(category?.words)){
         const length = category?.words?.length;
         const random = Math.floor(Math.random()*length);
         word = category.words[random];
     }
     else{
         const randomCategory = RandomService.getRandomCategory();
         const length = randomCategory?.words?.length;
         const random = Math.floor(Math.random()*length);
         word = randomCategory.words[random];
     }
    return word;
}
}
