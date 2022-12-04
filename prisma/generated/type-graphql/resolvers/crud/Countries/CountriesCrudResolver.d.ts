import { GraphQLResolveInfo } from "graphql";
import { AggregateCountriesArgs } from "./args/AggregateCountriesArgs";
import { CreateManyCountriesArgs } from "./args/CreateManyCountriesArgs";
import { CreateOneCountriesArgs } from "./args/CreateOneCountriesArgs";
import { DeleteManyCountriesArgs } from "./args/DeleteManyCountriesArgs";
import { DeleteOneCountriesArgs } from "./args/DeleteOneCountriesArgs";
import { FindFirstCountriesArgs } from "./args/FindFirstCountriesArgs";
import { FindFirstCountriesOrThrowArgs } from "./args/FindFirstCountriesOrThrowArgs";
import { FindManyCountriesArgs } from "./args/FindManyCountriesArgs";
import { FindUniqueCountriesArgs } from "./args/FindUniqueCountriesArgs";
import { FindUniqueCountriesOrThrowArgs } from "./args/FindUniqueCountriesOrThrowArgs";
import { GroupByCountriesArgs } from "./args/GroupByCountriesArgs";
import { UpdateManyCountriesArgs } from "./args/UpdateManyCountriesArgs";
import { UpdateOneCountriesArgs } from "./args/UpdateOneCountriesArgs";
import { UpsertOneCountriesArgs } from "./args/UpsertOneCountriesArgs";
import { Countries } from "../../../models/Countries";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCountries } from "../../outputs/AggregateCountries";
import { CountriesGroupBy } from "../../outputs/CountriesGroupBy";
export declare class CountriesCrudResolver {
    aggregateCountries(ctx: any, info: GraphQLResolveInfo, args: AggregateCountriesArgs): Promise<AggregateCountries>;
    createManyCountries(ctx: any, info: GraphQLResolveInfo, args: CreateManyCountriesArgs): Promise<AffectedRowsOutput>;
    createOneCountries(ctx: any, info: GraphQLResolveInfo, args: CreateOneCountriesArgs): Promise<Countries>;
    deleteManyCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCountriesArgs): Promise<AffectedRowsOutput>;
    deleteOneCountries(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCountriesArgs): Promise<Countries | null>;
    findFirstCountries(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountriesArgs): Promise<Countries | null>;
    findFirstCountriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCountriesOrThrowArgs): Promise<Countries | null>;
    findManyCountries(ctx: any, info: GraphQLResolveInfo, args: FindManyCountriesArgs): Promise<Countries[]>;
    findUniqueCountries(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountriesArgs): Promise<Countries | null>;
    findUniqueCountriesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCountriesOrThrowArgs): Promise<Countries | null>;
    groupByCountries(ctx: any, info: GraphQLResolveInfo, args: GroupByCountriesArgs): Promise<CountriesGroupBy[]>;
    updateManyCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCountriesArgs): Promise<AffectedRowsOutput>;
    updateOneCountries(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCountriesArgs): Promise<Countries | null>;
    upsertOneCountries(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCountriesArgs): Promise<Countries>;
}