import { EndofshiftOrderByWithRelationInput } from "../../../inputs/EndofshiftOrderByWithRelationInput";
import { EndofshiftWhereInput } from "../../../inputs/EndofshiftWhereInput";
import { EndofshiftWhereUniqueInput } from "../../../inputs/EndofshiftWhereUniqueInput";
export declare class FindManyEndofshiftArgs {
    where?: EndofshiftWhereInput | undefined;
    orderBy?: EndofshiftOrderByWithRelationInput[] | undefined;
    cursor?: EndofshiftWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "content" | "login" | "mcms" | "next_shift" | "projects" | "tickets" | "whid"> | undefined;
}
