import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Articulo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'string',
    required: true,
  })
  Codigo: string;

  @property({
    type: 'number',
    required: true,
  })
  Costo: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
