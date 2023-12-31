import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => Account)
export class AccountsResolver {
    constructor(private readonly accountsService: AccountsService) { }

    @Mutation(() => Account)
    createAccount(@Args('createAccountInput') createAccountInput: CreateAccountInput) {
        return this.accountsService.create(createAccountInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [Account], { name: 'accounts' })
    findAll() {
        return this.accountsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => Account, { name: 'account' })
    findOne(@Args('username', { type: () => String }) username: string) {
        return this.accountsService.findOne(username);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Account)
    updateAccount(@Args('updateAccountInput') updateAccountInput: UpdateAccountInput) {
        return this.accountsService.update(updateAccountInput);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Boolean)
    removeAccount(@Args('username', { type: () => String }) username: string) {
        return this.accountsService.remove(username);
    }
}
