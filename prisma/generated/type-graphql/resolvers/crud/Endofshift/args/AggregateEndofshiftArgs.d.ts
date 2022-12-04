import { EndofshiftOrderByWithRelationInput } from "../../../inputs/EndofshiftOrderByWithRelationInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";
export declare class AggregateEndofshiftArgs {
    where?: EndofshiftWhereInput | undefined;
    orderBy?: EndofshiftOrderByWithRelationInput[] | undefined;
    cursor?: EndofshiftWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
