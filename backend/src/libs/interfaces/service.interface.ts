interface IService<T = unknown> {
  find(id: number): Promise<T | null>;
  findAll(query: {
    take: number;
    skip: number;
    sortOption: string | null;
  }): Promise<{
    items: T[];
  }>;
  create(payload: unknown): Promise<T>;
  update(): Promise<T>;
  delete(): Promise<boolean>;
}

export { type IService };
