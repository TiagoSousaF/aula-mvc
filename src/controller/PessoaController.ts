import { Request, Response } from 'express';
import { Pessoa } from "../model/Pessoa";

class PessoaController extends Pessoa{

    static async todos(req: Request, res: Response) {
        try {
            const listaDePessoas = await Pessoa.listarPessoas();

            res.status(200).json(listaDePessoas);
        } catch (error) {
            console.log(`Erro ao acessar o método herdado: ${error}`);
            
            res.status(400).json("Erro ao recuperar as informações")
        }   
    }

}

export default PessoaController;
