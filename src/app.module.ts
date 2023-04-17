import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { SupplierResolver } from './resolvers/supplier.resolver';
import { SupplierService } from './services/supplier/supplier.service';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        const url = 'mongodb://localhost:27017/billboardz_db';
        return {
          uri: url,
        };
      },
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [AppService, SupplierResolver, SupplierService],
})
export class AppModule {}
