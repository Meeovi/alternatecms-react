"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEndofshiftResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyEndofshiftArgs_1 = require("./args/DeleteManyEndofshiftArgs");
const Endofshift_1 = require("../../../models/Endofshift");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyEndofshiftResolver = class DeleteManyEndofshiftResolver {
    async deleteManyEndofshift(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).endofshift.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEndofshiftArgs_1.DeleteManyEndofshiftArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyEndofshiftResolver.prototype, "deleteManyEndofshift", null);
DeleteManyEndofshiftResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Endofshift_1.Endofshift)
], DeleteManyEndofshiftResolver);
exports.DeleteManyEndofshiftResolver = DeleteManyEndofshiftResolver;
