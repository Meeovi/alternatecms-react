import { TicketingOrderByWithRelationInput } from "../../../inputs/TicketingOrderByWithRelationInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";
export declare class AggregateTicketingArgs {
    where?: TicketingWhereInput | undefined;
    orderBy?: TicketingOrderByWithRelationInput[] | undefined;
    cursor?: TicketingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
