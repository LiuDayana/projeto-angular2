import { routes } from './../app.routes';
import { ProdutoService } from './../produto.service';
import { Produto } from './../models/produtos.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [],
  templateUrl: './produtos-form.component.html',
  styleUrl: './produtos-form.component.css'
})
export class ProdutosFormComponent implements OnInit{
  Produto: Produto ={
    id: 0,
    nome: '',
    quantidade: 0,
    preco: 0,

}
  constructor(
    private ProdutoService: ProdutoService,
    private route: ActivatedRoute,
    private router: router,
  ){}
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    if (id){
      const produtoId=Number(id);
      const produtoExistente = this.ProdutoService.getProdutoById
    }
    salvarproduto(): void{
      const novoId= this.ProdutoService.getProdutos().length + 1;
      this.ProdutoService.addProduto(this.Produto);
    } else{

      this.ProdutoService.updateProduto(this.produto);
    }
    this.router.navigate(['/produtos-lista']);
  

}
