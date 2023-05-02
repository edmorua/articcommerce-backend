import { ProductI } from '../interfaces/product.interface';

export const products: ProductI[] = [
	{
		name: 'Proteina 1',
		sku: 'p1',
		code: 'p1',
		price: 950.50,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		quantity: 110,
		parentCategoryId: 1,
		categories: [
			{
				categoryId: 4
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 5,
			},
			{
				attributeId: 2,
        valueFloat: 2.5,
			},
			{
				attributeId: 7,
        valueInteger: 82,
			},
			{
				attributeId: 8,
        valueString: 'Vainilla',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
	{
		name: 'Proteina 2',
		sku: 'P2',
		code: 'P2',
		price: 1220,
		parentCategoryId: 1,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		quantity: 20,
		categories: [
			{
				categoryId: 5
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 10,
			},
			{
				attributeId: 2,
        valueFloat: 4.5,
			},
			{
				attributeId: 7,
        valueInteger: 162,
			},
			{
				attributeId: 8,
        valueString: 'Chocolate',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
	{
		name: 'Proteina 3',
		sku: 'p3',
		code: 'p3',
		price: 1550,
		parentCategoryId: 1,
		quantity: 2,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		categories: [
			{
				categoryId: 6
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 5,
			},
			{
				attributeId: 2,
        valueFloat: 2.5,
			},
			{
				attributeId: 7,
        valueInteger: 82,
			},
			{
				attributeId: 8,
        valueString: 'Cereal',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
	{
		name: 'Proteina 4',
		sku: 'p4',
		code: 'p4',
		price: 4050,
		parentCategoryId: 1,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		quantity: 34,
		categories: [
			{
				categoryId: 7
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 5,
			},
			{
				attributeId: 2,
        valueFloat: 2.5,
			},
			{
				attributeId: 7,
        valueInteger: 82,
			},
			{
				attributeId: 8,
        valueString: 'Churro',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
	{
		name: 'Proteina 5',
		sku: 'p5',
		code: 'p5',
		price: 1000,
		parentCategoryId: 1,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		quantity: 16,
		categories: [
			{
				categoryId: 8
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 5,
			},
			{
				attributeId: 2,
        valueFloat: 2.5,
			},
			{
				attributeId: 7,
        valueInteger: 82,
			},
			{
				attributeId: 8,
        valueString: 'Fresa',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
	{
		name: 'Proteina 6',
		sku: 'p6',
		code: 'p6',
		price: 3500.50,
		imageURLs: [
			'https://m.media-amazon.com/images/I/61GDn0-MvwL._AC_SY879_.jpg',
			'https://m.media-amazon.com/images/I/81ZCbTIdE+L._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/71VMUEMihPL._AC_SX679_.jpg',
			'https://m.media-amazon.com/images/I/61rr-7ijYdL._AC_SX679_.jpg'
		],
		parentCategoryId: 1,
		quantity: 1,
		categories: [
			{
				categoryId: 9
			}
		],
		attributes: [
			{
				attributeId: 1,
				valueFloat: 5,
			},
			{
				attributeId: 2,
        valueFloat: 2.5,
			},
			{
				attributeId: 7,
        valueInteger: 82,
			},
			{
				attributeId: 8,
        valueString: 'Piña colada',
			},
			{
				attributeId: 11,
        valueString: 'Test',
			}
		]
	},
];
