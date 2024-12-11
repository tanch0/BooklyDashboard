"use server";

import { Category, CategoryCreate, PaginatedCategory } from "@/types/category";

const BASE_URL = "http://localhost:8000/api/0.1.0/";

export const getCategories = async (
  skip: number = 0,
  limit: number = 10
): Promise<PaginatedCategory> => {
  try {
    const queryParams = new URLSearchParams({
      skip: skip.toString(),
      limit: limit.toString(),
    });

    const res = await fetch(`${BASE_URL}categories?${queryParams}`, {
      method: "GET",
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getCategoriesById = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${BASE_URL}categories/${id}`, {
      method: "GET",
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (
  category: CategoryCreate
): Promise<Category> => {
  try {
    const res = await fetch(`${BASE_URL}categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });

    if (!res.ok) {
      throw new Error(
        `Failed to create category: ${res.status} ${res.statusText}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (
  id: string,
  category: CategoryCreate
): Promise<Category> => {
  try {
    const res = await fetch(`${BASE_URL}categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });

    if (!res.ok) {
      throw new Error(
        `Failed to update category: ${res.status} ${res.statusText}`
      );
    }

    return await res.json();
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}categories/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to delete category: ${res.status} ${res.statusText}`
      );
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
