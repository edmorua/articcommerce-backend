import { AttributeI } from '../interfaces/attributes.interface';

export const attributes: AttributeI[] = [
	{
		//1
		name: 'lb',
		description: 'Peso en libras',
		dataType: 'float',
		code: 'lb'
	},
	{
		//2
		name: 'kg',
    description: 'Peso en kilogramos',
    dataType: 'float',
		code: 'kg',
	},
	{
		//3
		name: 'g',
		description: 'Peso en gramos',
    dataType: 'float',
		code: 'g',
	},
	{
		//4
		name: 'capsulas',
		description: 'Numero de capsulas en el producto',
		dataType: 'integer',
		code: 'capsules',
	},
	{
		//5
		name: 'color',
		description: 'Color del producto',
    dataType: 'string',
		code: 'color',
	},
	{
		//6
		name: 'precio',
    description: 'Precio del producto',
    dataType: 'float',
		code: 'price',
	},
	{
		//7
		name: 'scopes',
		description: 'Scopes del producto',
    dataType: 'integer',
		code: 'scopes',
	},
	{
		//8
		name: 'sabor',
		description: 'Sabor del producto',
    dataType: 'string',
		code: 'flavour',
	},
	{
		//9
		name: 'tamaño',
    description: 'Tamaño del producto',
    dataType: 'integer',
		code: 'size',
	},
	{
		//10
		name: 'fecha de expiracion',
		description: 'Fecha de expiracion del producto',
    dataType: 'date',
		code: 'expiration-date'
	},
	{
		//11
		name: 'marca',
		description: 'Marca del producto',
    dataType: 'string',
    code: 'manufacturer',
	}
];
