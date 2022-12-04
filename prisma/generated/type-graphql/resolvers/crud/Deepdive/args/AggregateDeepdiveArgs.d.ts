import { DeepdiveOrderByWithRelationInput } from "../../../inputs/DeepdiveOrderByWithRelationInput";
import { DeepdiveWhereInput } from "../../../inputs/DeepdiveWhereInput";
import { DeepdiveWhereUniqueInput } from "../../../inputs/DeepdiveWhereUniqueInput";
export declare class AggregateDeepdiveArgs {
    where?: DeepdiveWhereInput | undefined;
    orderBy?: DeepdiveOrderByWithRelationInput[] | undefined;
    cursor?: DeepdiveWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
