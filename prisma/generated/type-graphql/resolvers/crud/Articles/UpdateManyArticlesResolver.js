"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyArticlesArgs_1 = require("./args/UpdateManyArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyArticlesResolver = class UpdateManyArticlesResolver {
    async updateManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyArticlesArgs_1.UpdateManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyArticlesResolver.prototype, "updateManyArticles", null);
UpdateManyArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], UpdateManyArticlesResolver);
exports.UpdateManyArticlesResolver = UpdateManyArticlesResolver;
