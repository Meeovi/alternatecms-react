"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEventsArgs_1 = require("./args/UpdateManyEventsArgs");
const Events_1 = require("../../../models/Events");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEventsResolver = class UpdateManyEventsResolver {
    async updateManyEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).events.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEventsArgs_1.UpdateManyEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEventsResolver.prototype, "updateManyEvents", null);
UpdateManyEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], UpdateManyEventsResolver);
exports.UpdateManyEventsResolver = UpdateManyEventsResolver;
