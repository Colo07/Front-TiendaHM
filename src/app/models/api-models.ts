export interface Clothes {
    data:Clothe[];
    error:boolean
}

export interface Clothe {
_id:   string;
id:string;
name:  string;
color: string[];
size:  string[];
price: string;
imgF:  string;
imgB:  string;
type?: string[];
}