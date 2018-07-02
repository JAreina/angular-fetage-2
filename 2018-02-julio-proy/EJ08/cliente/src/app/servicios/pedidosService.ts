import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfiguracionService } from "./configuracion.service";
import { LoginService } from "./login.service";
import { Detalle } from "../entidades/detalle";
import { SesionService } from "./sesion.service";
import { Pedido } from "../entidades/pedido";

//Este lo damos de alta en el módulo porque si
//@Injectable({
//    providedIn: 'root'
//})
@Injectable()
export class PedidosService {

    constructor( private http:HttpClient,
                 private cfg:ConfiguracionService,
                 private loginService:LoginService,
                 private sesion:SesionService ){
        
        sesion.add("pedido", new Pedido() );

    }

    public addDetallePedido( detalle:Detalle ){
        let pedido:Pedido = this.sesion.get("pedido");        
        //pedido.detalles.push(detalle);
        pedido.addDetalle(detalle);

        console.log(pedido);

    }

    public eliminarDetallePedido( detalle:Detalle ){
        let pedido:Pedido = this.sesion.get("pedido");        
        //pedido.detalles.push(detalle);
        pedido.eliminarDetalle(detalle);
    }
    
}