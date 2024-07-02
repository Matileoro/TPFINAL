
class Sonda {
    
    sondas = [];

    create = async (id, temperatura) => {
        const sonda = { id, temperatura };
        this.sondas.push(sonda);
        return this.sondas[this.sondas.length - 1];
    };

    obtenerTodas = async () => {
        return this.sondas
    };

    obtenerPorId = async (id) => {
        return sondas.filter(ele => ele.id === id);
    };
}

export default Sonda;