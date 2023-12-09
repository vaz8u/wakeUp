import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AccountsModule } from './accounts/accounts.module';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: ':memory:',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true
        }),
        AccountsModule,
    ],
})
export class AppModule { }
