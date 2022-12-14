import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class WorkspacesUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | undefined;
    created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    code?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    customers?: NullableIntFieldUpdateOperationsInput | undefined;
    users?: NullableIntFieldUpdateOperationsInput | undefined;
    products?: NullableBigIntFieldUpdateOperationsInput | undefined;
    tasks?: NullableBigIntFieldUpdateOperationsInput | undefined;
    brands?: NullableBigIntFieldUpdateOperationsInput | undefined;
    shops?: NullableIntFieldUpdateOperationsInput | undefined;
    category?: NullableIntFieldUpdateOperationsInput | undefined;
    isPublic?: NullableBoolFieldUpdateOperationsInput | undefined;
    projects?: NullableBigIntFieldUpdateOperationsInput | undefined;
    author?: NullableStringFieldUpdateOperationsInput | undefined;
    media?: NullableStringFieldUpdateOperationsInput | undefined;
    brands_brandsToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    categories?: NullableStringFieldUpdateOperationsInput | undefined;
    customers_customersToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    products_productsToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    projects_projectsToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    shops_shopsToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    tasks_tasksToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
    users_usersToworkspaces?: NullableStringFieldUpdateOperationsInput | undefined;
}
