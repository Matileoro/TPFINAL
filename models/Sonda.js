
class Sonda {
    
    sondas = [];

    create = async (id, temperatura) => {
        const sonda = { id, temperatura };
        this.sondas.push(sonda);
        return this.sondas[this.sondas.length - 1];
    };

    getAllSondas = async () => {
        return this.sondas
    };

    getSondaById = async (id) => {
        return this.sondas.filter(ele => ele.id === id);
    };
}

export default Sonda;