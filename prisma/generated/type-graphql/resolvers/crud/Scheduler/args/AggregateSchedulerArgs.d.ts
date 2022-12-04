import { SchedulerOrderByWithRelationInput } from "../../../inputs/SchedulerOrderByWithRelationInput";
import { SchedulerWhereInput } from "../../../inputs/SchedulerWhereInput";
import { SchedulerWhereUniqueInput } from "../../../inputs/SchedulerWhereUniqueInput";
export declare class AggregateSchedulerArgs {
    where?: SchedulerWhereInput | undefined;
    orderBy?: SchedulerOrderByWithRelationInput[] | undefined;
    cursor?: SchedulerWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
