import { VisitsOrderByWithRelationInput } from "../../../inputs/VisitsOrderByWithRelationInput";
import { VisitsWhereInput } from "../../../inputs/VisitsWhereInput";
import { VisitsWhereUniqueInput } from "../../../inputs/VisitsWhereUniqueInput";
export declare class FindFirstVisitsArgs {
    where?: VisitsWhereInput | undefined;
    orderBy?: VisitsOrderByWithRelationInput[] | undefined;
    cursor?: VisitsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "location" | "username" | "reason" | "content" | "emergency" | "start_date" | "end_date" | "task" | "meeting"> | undefined;
}
