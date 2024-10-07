import { produtoservice } from './produto.service';
import { Injectable } from "@angular/core";
import { Produto } from "./models/produtos.models";
import { threadId } from 'worker_threads';

@Injectable({
    providedIn: 'root '
})
export class ProdutoService{

    private produtos:Produto[]=[
    {id: 1, nome: 'Produto A', quantidade:10,preco:15.5},
    {id: 2, nome: 'Produto B', quantidade:20,preco:30.0},
    {id: 3, nome: 'Produto C', quantidade:5,preco:50.0},
    ]
    constructor() {}

    getProdutos():Produto[]{
        return this.produtos;
    }
    addProduto(produto:Produto): void {
        this.produtos.push(produto);
    }
    deleteProduto(id:number):void {
        this.produtos = this.produtos.filter(this.produto=>this.produto.id !== id);
    }
    getProdutoById (id: number): Produto | undefined{
        return this.produtos.find(produto =>produto.id ===id);
    }
    updateProduto( id:number):{
    
    }
}