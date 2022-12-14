"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneVisitsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneVisitsArgs_1 = require("./args/DeleteOneVisitsArgs");
const Visits_1 = require("../../../models/Visits");
const helpers_1 = require("../../../helpers");
let DeleteOneVisitsResolver = class DeleteOneVisitsResolver {
    async deleteOneVisits(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).visits.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Visits_1.Visits, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVisitsArgs_1.DeleteOneVisitsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneVisitsResolver.prototype, "deleteOneVisits", null);
DeleteOneVisitsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Visits_1.Visits)
], DeleteOneVisitsResolver);
exports.DeleteOneVisitsResolver = DeleteOneVisitsResolver;
