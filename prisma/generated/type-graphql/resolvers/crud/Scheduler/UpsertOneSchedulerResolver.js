"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneSchedulerArgs_1 = require("./args/UpsertOneSchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let UpsertOneSchedulerResolver = class UpsertOneSchedulerResolver {
    async upsertOneScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Scheduler_1.Scheduler, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneSchedulerArgs_1.UpsertOneSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneSchedulerResolver.prototype, "upsertOneScheduler", null);
UpsertOneSchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], UpsertOneSchedulerResolver);
exports.UpsertOneSchedulerResolver = UpsertOneSchedulerResolver;