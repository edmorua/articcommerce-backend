import Category from "models/category.model";
import CategoryI from "../interfaces/category.interface";

class CategoryService {
  async create(category: CategoryI): Promise<CategoryI> {
    try {
      const newCategory = await Category.create({ ...category })
      return newCategory.toJSON() as CategoryI;
    } catch (error) {
      throw error
    }
  }
  async getCategoryById(id: number): Promise<CategoryI | null> {
    try {
      const category = await Category.findByPk(id, { include: Category });
      return category ? category.toJSON() as CategoryI : null;
    } catch (error) {
      throw error;
    }
  }
  async getAllCategories(): Promise<CategoryI[]> {
    try {
      const categories = await Category.findAll();
      return categories as CategoryI[];
    } catch (error) {
      throw error;
    }
  }
  async getAllSubCategoriesFromParent(parentId: number): Promise<CategoryI[]> {
    try {
      const subCategories = await Category.findAll({ where: { parentCategoryId: parentId } })
      return subCategories as CategoryI[];
    } catch (error) {
      throw error;
    }
  }
}

const categoryService = new CategoryService()
export default categoryService;