export interface BaseModelCollection<TModel, TKey> {
  ids: TKey[];
  entities: { [id: string]: TModel };
}
