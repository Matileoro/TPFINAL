import Sonda from "../models/Sonda.js";
import { validateSonda, validateId } from "../utils/validation.js"

const sonda = new Sonda();

class Service {

    addSonda = (id, temperatura) => {
        const sonda = { id, temperatura };
        validateSonda(sonda);
        return sonda.addSonda(sonda);
    };
    
    getAllSondas = () => {
        return sonda.getAllSondas();
    };
    
    getSondaById = (id) => {
        validateId(id);
        return sonda.getSondaById(id);
    };
};

export default Service;