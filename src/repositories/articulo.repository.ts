import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Articulo, ArticuloRelations} from '../models';

export class ArticuloRepository extends DefaultCrudRepository<
  Articulo,
  typeof Articulo.prototype.id,
  ArticuloRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Articulo, dataSource);
  }
}
