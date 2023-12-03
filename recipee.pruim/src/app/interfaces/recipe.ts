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
    lastEdit?: string;
    links?: RecipeRef[];
}

export interface RecipeRef {
    originalBookID: number,
    recipeNumber: number,
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


