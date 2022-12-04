import { ChecklistOrderByWithRelationInput } from "../../../inputs/ChecklistOrderByWithRelationInput";
import { ChecklistWhereInput } from "../../../inputs/ChecklistWhereInput";
import { ChecklistWhereUniqueInput } from "../../../inputs/ChecklistWhereUniqueInput";
export declare class FindFirstChecklistOrThrowArgs {
    where?: ChecklistWhereInput | undefined;
    orderBy?: ChecklistOrderByWithRelationInput[] | undefined;
    cursor?: ChecklistWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "username" | "location" | "regional_manager" | "manager" | "description" | "ticket" | "project" | "region" | "country" | "media" | "prod_id" | "trainings" | "task" | "type"> | undefined;
}
