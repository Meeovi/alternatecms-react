import { ChecklistOrderByWithRelationInput } from "../../../inputs/ChecklistOrderByWithRelationInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
export declare class AggregateChecklistArgs {
    where?: ChecklistWhereInput | undefined;
    orderBy?: ChecklistOrderByWithRelationInput[] | undefined;
    cursor?: ChecklistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
