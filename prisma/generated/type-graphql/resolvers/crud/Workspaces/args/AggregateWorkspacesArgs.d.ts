import { WorkspacesOrderByWithRelationInput } from "../../../inputs/WorkspacesOrderByWithRelationInput";
import { WorkspacesWhereInput } from "../../../inputs/WorkspacesWhereInput";
import { WorkspacesWhereUniqueInput } from "../../../inputs/WorkspacesWhereUniqueInput";
export declare class AggregateWorkspacesArgs {
    where?: WorkspacesWhereInput | undefined;
    orderBy?: WorkspacesOrderByWithRelationInput[] | undefined;
    cursor?: WorkspacesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
