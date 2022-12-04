import { VisitsOrderByWithRelationInput } from "../../../inputs/VisitsOrderByWithRelationInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
export declare class AggregateVisitsArgs {
    where?: VisitsWhereInput | undefined;
    orderBy?: VisitsOrderByWithRelationInput[] | undefined;
    cursor?: VisitsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
