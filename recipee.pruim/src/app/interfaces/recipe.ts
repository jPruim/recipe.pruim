export interface Recipe { 
    title: string; 
    originalBookID?: number;
    recipeNumber?: number;
    preparationTime?: string;
    categoryID?: number;
    lastEdit?: string;
    intro?: string;
    description?: string;
    outro?: string;
    reviews?: Reviews;
    imageLink?: string; 
    links?: RecipeRef[];
    steps?: Step[];
}

export interface RecipeRef {
    originalBookID: number,
    recipeNumber: number,
}


export interface Reviews {
    [key:string]: string
}

export interface IngredientList {
    [key: string]: string
}

export interface Book {
    title: string;
    id: number;
    imageLink?: string;
    edition?: number;
    intro?: string;
}

export interface Category {
    id: number,
    name: string,
    blurb: string,
    imageLink?: string,
}

export interface Step {
    instruction: string;
    ingredients?: string[];
}


