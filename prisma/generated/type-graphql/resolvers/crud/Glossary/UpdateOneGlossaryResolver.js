"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneGlossaryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneGlossaryArgs_1 = require("./args/UpdateOneGlossaryArgs");
const Glossary_1 = require("../../../models/Glossary");
const helpers_1 = require("../../../helpers");
let UpdateOneGlossaryResolver = class UpdateOneGlossaryResolver {
    async updateOneGlossary(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).glossary.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Glossary_1.Glossary, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneGlossaryArgs_1.UpdateOneGlossaryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneGlossaryResolver.prototype, "updateOneGlossary", null);
UpdateOneGlossaryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Glossary_1.Glossary)
], UpdateOneGlossaryResolver);
exports.UpdateOneGlossaryResolver = UpdateOneGlossaryResolver;
