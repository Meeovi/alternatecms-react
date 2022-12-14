import { NewslettersOrderByWithRelationInput } from "../../../inputs/NewslettersOrderByWithRelationInput";
import { NewslettersWhereInput } from "../../../inputs/NewslettersWhereInput";
import { NewslettersWhereUniqueInput } from "../../../inputs/NewslettersWhereUniqueInput";
export declare class FindManyNewslettersArgs {
    where?: NewslettersWhereInput | undefined;
    orderBy?: NewslettersOrderByWithRelationInput[] | undefined;
    cursor?: NewslettersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "customer_first_name" | "customer_last_name" | "store" | "status" | "websites" | "created_at" | "cust_id" | "customers"> | undefined;
}
