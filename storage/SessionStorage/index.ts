import { SessionStorage } from "./Interface";

const sessionStorageApp: SessionStorage = {
    // Implementação do getter
    getValor(chave: string): any {
        console.log(`Obtendo valor para a chave ${chave}`);
        return this[chave];
    },

    // Implementação do setter
    setValor(chave: string, valor: any): void {
        console.log(`Configurando valor para a chave ${chave}`);
        this[chave] = valor;
    }
};

export default sessionStorageApp;