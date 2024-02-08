var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Api {
    constructor() {
    }
    static getData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${Api.base}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const result = yield response.json();
            console.log(result);
            /*for (let i=0; i< result.values.toto.length; i++) {
                Listdata.push(result[i].toto)
            }
            return Listdata*/
        });
    }
    static getSize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getWalls() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getEndPlates() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
Api.base = "https://sdw.mufasa.fr/portal";
Api.islnit = false;
