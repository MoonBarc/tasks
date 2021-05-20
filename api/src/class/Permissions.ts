enum Permission {
    OPERATOR,
    ADMINISTRATOR,
    VIEW_TASK,
    UPDATE_TASK,
    VIEW_ALL_TASKS,
    UPDATE_ALL_TASKS,
    MANAGE_TASK_GROUPS,
    UPDATE_USER_ROLES,
    VIEW_USERS,
    VIEW_STATUS
}

class Permissions {
    perms: Permission[]
    constructor(perms: Permission[]) {
        this.perms = perms;
    }

    /**
     * if this object contains a specific permission - _doesn't check for operator/administrator_.
     * @param perm permission to check
     * @returns whether the check was successful
     */
    contains(perm: Permission): boolean {
        return !!this.perms.find((p) => p == perm)
    }

    /**
     * checks if the user has a permission. uses admin/operator perms
     * @param perm permission to check
     * @returns whether the check was successful
     */
    check(perm: Permission): boolean {
        if(this.contains(perm)) {
            // has permission
            return true;
        }else if(this.contains(Permission.ADMINISTRATOR) || this.contains(Permission.OPERATOR)) {
            return true;
        }
        return false;
    }
}

export { Permissions, Permission }