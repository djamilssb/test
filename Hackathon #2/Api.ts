
export class Api {
    protected static base : string = "https://sdw.mufasa.fr/portal" ;
    public static source : EventSource;

    constructor() {
    }

    static async getData(id:string){
        const response = await fetch(`${Api.base}/${id}`,{
            method : 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        const result = await response.json();
        console.log(result)
        return result

        /*for (let i=0; i< result.values.toto.length; i++) {
            Listdata.push(result[i].toto)
        }
        return Listdata*/
    }

    static async getSize(){
    }

    static async getWalls(){
    }

    static async getEndPlates(){
    }
}
