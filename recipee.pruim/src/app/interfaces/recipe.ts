export interface Recipe { 
    title: string; 
    intro?: string;
    description?: string;
    outro?: string;
    originalBookID?: number;
    recipeeNumber?: number;
    steps?: Step[];
    imageLink?: string; 
    categoryID?: number;
    lastEdit?: string;
}

export interface IngredientList {
    [key: string]: string
}

export interface Book {
    name: string;
    id: number;
    imageLink?: string;
    edition?: number;
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


