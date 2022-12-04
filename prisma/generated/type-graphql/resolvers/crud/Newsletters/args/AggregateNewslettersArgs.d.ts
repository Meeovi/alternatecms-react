import { NewslettersOrderByWithRelationInput } from "../../../inputs/NewslettersOrderByWithRelationInput";
import { NewslettersWhereInput } from "../../../inputs/NewslettersWhereInput";
import { NewslettersWhereUniqueInput } from "../../../inputs/NewslettersWhereUniqueInput";
export declare class AggregateNewslettersArgs {
    where?: NewslettersWhereInput | undefined;
    orderBy?: NewslettersOrderByWithRelationInput[] | undefined;
    cursor?: NewslettersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
