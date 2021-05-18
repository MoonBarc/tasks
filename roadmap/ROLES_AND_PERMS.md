# Roles and Permissions
## Roles
Roles should be able to be configured from the `config/roles.yml` file. Each role has a name, and a color, and a user may have more than one of them.
Roles can have many different permissions.

## Permissions
Each permission represents a specific action. If you do not have permission to do that action, you cannot do it. Permissions cannot be attached to users, but can be attached to Task Groups and Roles.

Special permissions:

### Administrator Permission
The `ADMINISTRATOR` permission includes all permissions, except for the `OPERATOR` permission.

### Operator Permission
The `OPERATOR` permission allows users who have it to manage `meta` tasks (see TASKS.md), such as updating the system, deleting resources, etc. It inherits the `ADMINISTRATOR` permission.