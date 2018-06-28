
export class Producto {

    constructor(public _id       :string = undefined,
                public nombre    :string = null,
                public descripcion     :string = null,
                public precio        :number = null,
                public imagen   :string = null,
                public categoria      :string = null,
                ){
    }

}