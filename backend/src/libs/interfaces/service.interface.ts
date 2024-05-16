interface IService<T = unknown> {
  find(id: number): Promise<T | null>;
  findAll(sotrtOption: string | null): Promise<{
    items: T[];
  }>;
  create(payload: unknown): Promise<T>;
  update(): Promise<T>;
  delete(): Promise<boolean>;
}

export { type IService };
