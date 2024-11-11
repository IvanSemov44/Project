type Category = "groceries" | "utilities" | "entertainment";

export type Todo = {
  description: string;
  amount: number;
  category: Category;
};
