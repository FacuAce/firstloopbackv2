import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Carrito, CarritoRelations} from '../models';

export class CarritoRepository extends DefaultCrudRepository<
  Carrito,
  typeof Carrito.prototype.id,
  CarritoRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Carrito, dataSource);
  }
}
