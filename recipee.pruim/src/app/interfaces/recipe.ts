export interface Recipe { 
    title: string; 
    intro?: string;
    description?: string;
    outro?: string;
    originalBookID?: number;
    recipeNumber?: number;
    steps?: Step[];
    imageLink?: string; 
    categoryID?: number;
    reviews?: Reviews;
    preparationTime?: string;
    lastEdit?: string;
    links?: RecipeRef[];
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


