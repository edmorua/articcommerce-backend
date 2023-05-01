/* eslint-disable no-magic-numbers */
import { CategoryI } from '../interfaces/category.interface';

export const parentCategories: CategoryI[] = [
	{
		//1
		name: 'Protein',
		code: 'PRO',
		parentCategoryId: undefined,
		parentCategory: undefined,
	},
	{
		//2
		name: 'Vitaminas',
		code: 'VIT',
	},
	{
		//3
		name: 'Suplementos',
		code: 'SUP',
	}
];

export const proteinSubCategories: CategoryI[] = [
	{
		//4
		name: 'Iso',
		code: 'ISO_PRO',
		parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
	{
		//5
		name: 'Hidrolizada',
		code: 'HID_PRO',
    parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
	{
		//6
		name: 'Whey',
    code: 'WHEY_PRO',
    parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
	{
		//7
		name: 'Benzene',
    code: 'BENZ_PRO',
    parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
	{
		//8
		name: 'Lactose',
    code: 'LACT_PRO',
    parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
	{
		//9
		name: 'Vegetal',
		code: 'VEG_PRO',
    parentCategoryId: 1,
    parentCategory: parentCategories[0],
	},
];


export const vitaminisSubCategories: CategoryI[] = [
	{
		//10
		name: 'Vitamin A',
		code: 'VIT_A',
		parentCategoryId: 2,
		parentCategory: parentCategories[1],
	},
	{
		//11
		name: 'Vitamin B',
    code: 'VIT_B',
    parentCategoryId: 2,
    parentCategory: parentCategories[1],
	},
	{
		//12
		name: 'Vitamin C',
    code: 'VIT_C',
    parentCategoryId: 2,
    parentCategory: parentCategories[1],
	}
];

export const suplementesSubCategories: CategoryI[] = [
  {
		//13
		name: 'Suplemente A',
    code: 'SUP_A',
    parentCategoryId: 3,
    parentCategory: parentCategories[2],
	},
	{
		//14
		name: 'BCAAS',
		code: 'BCAAS',
    parentCategoryId: 3,
    parentCategory: parentCategories[2],
	},
	{
		//15
		name: 'Glutamina',
		code: 'GLUT',
    parentCategoryId: 3,
    parentCategory: parentCategories[2],
	},
	{
		//16
		name: 'Creatina',
		code: 'CRE',
		parentCategoryId: 3,
    parentCategory: parentCategories[2],
	}
];
