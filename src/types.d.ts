export interface IPhoto {
    pk: number;
    file: string;
    description: string;
}
export interface IOrigin{
    id: number;
    origin_photo: IPhoto[];
    name: string;
    origin_description: string;
    origin_effect: string;
}
export interface IJob{
    id: number;
    origin_photo: IPhoto[];
    name: string;
    job_description: string;
    job_effect: string;
}

export interface IChampion {
    id: number;
    name: string;
    champion_photo:IPhoto[]
    price: number;
    health: number;
    AD: number;
    attack_range: number;
    attack_speed: number;
    DPS: number;
    armor: number;
    magic_resistance: number;
    skill_name: string;
    skill_category: string;
    mana_start: number;
    mana_total: number;
    skill_description: string;
    skill_effect: string;
    skill_photo: IPhoto[];
    origin: IOrigin[];
    job: IJob[];
}