"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneOotoArgs_1 = require("./args/UpdateOneOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const helpers_1 = require("../../../helpers");
let UpdateOneOotoResolver = class UpdateOneOotoResolver {
    async updateOneOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOotoArgs_1.UpdateOneOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneOotoResolver.prototype, "updateOneOoto", null);
UpdateOneOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], UpdateOneOotoResolver);
exports.UpdateOneOotoResolver = UpdateOneOotoResolver;
