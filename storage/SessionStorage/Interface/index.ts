export interface SessionStorage {
    [chave: string]: any;

    // Função get para obter o valor pela chave
    getValor(chave: string): any;

    // Função set para definir o valor pela chave
    setValor(chave: string, valor: any): void;
}