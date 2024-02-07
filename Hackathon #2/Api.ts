
export class Api {
    protected static base : string = "https://sdw.mufasa.fr/portal" ;
    protected static islnit : boolean = false;
    public static source : EventSource;

    constructor() {
    }

    static async getData(data:SVGAElement){
        const Listdata = []
        const response = await fetch(`${Api.base}/_all_docs`,{
            method : 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        const result = await response.json();
        // console.log(result)

        for (let i=0; i< result.values.toto.length; i++) {
            Listdata.push(result[i].toto)
        }
        return Listdata
    }


    static async getSize(){

    }

    static async getWalls(){
    }

    static async getEndPlates(){

    }
}
